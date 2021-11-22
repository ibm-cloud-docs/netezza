const fs = require('fs');
const path = require('path');
const { argv } = require('process');
// const remark = require('remark');
// const styleGuide = require('remark-lint-list-item-indent');
// const styleGuide = require('remark-preset-lint-recommended');
// const styleGuide = require('remark-lint-list-item-content-indent');
// const report = require('vfile-reporter');
// const commandLineArgs = require('command-line-args')

// const optionDefinitions = [
//   { name: 'fix', alias: 'f'},
//   { name: 'indent', alias: 'i'},
// ]

// const options = commandLineArgs(optionDefinitions)

// console.log(options);
// return;
process.on('unhandledRejection', (err) => {
  throw err;
});

if (process.argv.length < 3) {
  console.error('Incorrect input, expected: [-f] <target dir>');
  throw new Error('Incorrect input');
}

const REG1 = /(\{):([a-zA-Z0-9][^:]*\})/;
const REG2 = /(\{):(#[a-zA-Z0-9-_][^:]*\})/;
const REG3 =
  /( *)(-|\*|[1-9]+\.)( \{: ([a-zA-Z0-9][^:]*|#[a-zA-Z0-9-_][^:]*)\})(.+)/;

const itemsToFix = [
  {
    expression: REG1,
    label: 'Extension spacing',
    fix: (target) => {
      return target.replace(REG1, (match, p1, p2) => {
        return `${p1}: ${p2}`;
      });
    },
  },
  {
    expression: REG2,
    label: 'Id spacing',
    fix: (target) => {
      return target.replace(REG2, (match, p1, p2) => {
        return `${p1}: ${p2}`;
      });
    },
  },
  {
    expression: REG3,
    label: 'List extention/id order',
    fix: (target) => {
      return target.replace(REG3, (match, p1, p2, p3, p4, p5) => {
        return `${p1}${p2}${p5}${p3}`;
      });
    },
  },
];

let autoFix = false;
let indentationCheck = false;

if (process.argv.length > 3) {
  const dirPath = process.argv[process.argv.length - 1];
  try {
    if (!fs.statSync(dirPath).isDirectory()) {
      console.error(`${dirPath} is not a directory`);
      throw new Error('Incorrect input');
    }
  } catch {
    console.error(`${dirPath} is not a directory`);
    throw new Error('Incorrect input');
  }

  for (let i = 2; i < process.argv.length; i++) {
    switch (process.argv[i]) {
      case '-f':
        autoFix = true;
        break;
      case '-i':
        indentationCheck = true;
        break;
      default:
        break;
    }
  }
}

const filesWritten = [];

const processIndividualFile = (filePath) => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const lines = fileContents.split(/\r?\n/);
  const newLines = [];
  let fileNamePrinted = false;
  // Fix items in list
  let skipping = false;
  lines.forEach((line, index) => {
    if (/^ *---/.test(line) || /^ *```/.test(line)) {
      newLines[index] = line;
      if (skipping) {
        skipping = false;
        return;
      } else {
        skipping = true;
        return;
      }
    }
    if (skipping) {
      newLines[index] = line;
      return;
    }
    let toFix = line;
    itemsToFix.forEach((item) => {
      if (item.expression.test(toFix)) {
        if (filesWritten.indexOf(path.resolve(filePath)) === -1) {
          filesWritten.push(path.resolve(filePath));
        }

        if (!fileNamePrinted) {
          console.log(
            `${'\n\033[1m'}>>> ${path.resolve(filePath)}${'\033[0m'}:\n`
          );
          fileNameprinted = true;
        }
        console.log(`Line: ${path.resolve(filePath)}:${index + 1}`);

        console.log(
          `\x1b[31m-${line.replace(/^ */, (match) => {
            return `${'\267'.repeat(match.length)}`;
          })}\x1b[0m`
        );

        const fixedLine = item.fix(toFix);
        newLines[index] = fixedLine;
        toFix = fixedLine;

        console.log(
          `\x1b[32m+${fixedLine.replace(/^ */, (match) => {
            return `${'\267'.repeat(match.length)}`;
          })}\x1b[0m`
        );
        console.log(`\nReason: \ ${item.label}`);
        console.log('\n--------------------------------\n');
      } else {
        newLines[index] = toFix;
      }
    });
  });
  skipping = false;
  if (indentationCheck) {
    console.log('-------------------- Indentation Warnings-----------------\n');
    newLines.forEach((line, index) => {
      if (/^ *---/.test(line) || /^ *```/.test(line)) {
        if (skipping) {
          skipping = false;
          return;
        } else {
          skipping = true;
          return;
        }
      }
      if (skipping) {
        return;
      }
      const twoSpaceRe = /^( {2})[^ ]/;
      if (twoSpaceRe.test(line)) {
        console.log(`Line: ${path.resolve(filePath)}:${index + 1}`);
      }
    });
  }
  const fixedLines = newLines.join('\n');

  // var file = remark().use(styleGuide, 'mixed').processSync(fixedLines);
  // if (file.messages.length > 0) {
  //   console.log('\n------- Indentation warnings -----\n');
  //   console.log(report(file));
  // }
  // If auto fix, replace file.
  if (autoFix) {
    fs.writeFileSync(filePath, fixedLines);
  }
};

const recursivelyListDir = (dir, callback) => {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory
      ? recursivelyListDir(dirPath, callback)
      : callback(path.join(dir, f));
  });
};

try {
  recursivelyListDir(
    process.argv[process.argv.length - 1],
    function (filePath) {
      const fileBaseName = path.basename(filePath, '.md');
      if (path.extname(filePath) === '.md') {
        processIndividualFile(filePath);
      }
    }
  );

  if (autoFix && filesWritten.length > 0) {
    console.log('\nwritten changes to file: ');
    filesWritten.forEach((writtenFile) => {
      console.log(writtenFile);
    });
  }
} catch (err) {
  console.error(err);
}
