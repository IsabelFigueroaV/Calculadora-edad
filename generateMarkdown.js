const fs = require('fs');

function createMarkdown(title, content, outputPath = 'output.md') {
  const markdown = `# ${title}\n\n${content}\n`;
  fs.writeFileSync(outputPath, markdown, 'utf8');
  console.log(`Markdown written to ${outputPath}`);
}

if (require.main === module) {
  const [title, content, outputPath] = process.argv.slice(2);
  if (!title || !content) {
    console.error('Usage: node generateMarkdown.js <title> <content> [outputPath]');
    process.exit(1);
  }
  createMarkdown(title, content, outputPath);
}

module.exports = createMarkdown;
