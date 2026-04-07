module.exports = {
  stylesheet: 'constitution.css',
  launch_options: {
    args: ['--lang=en-US'],
  },
  pdf_options: {
    format: 'A4',
    margin: {
      top: '28mm',
      bottom: '28mm',
      left: '32mm',
      right: '32mm',
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="
        width: 100%;
        font-family: 'Georgia', serif;
        font-size: 9px;
        color: #999;
        text-align: center;
        padding: 0 32mm;
        box-sizing: border-box;
      ">
        Agent Constitution — Open Business Protocol &nbsp;|&nbsp;
        openbusinessprotocol.org &nbsp;|&nbsp;
        <span class="pageNumber"></span>
      </div>
    `,
  },
}
