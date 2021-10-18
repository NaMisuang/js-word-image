/*
 * @Author: lhx 
 * @Date: 2021-09-14 16:47:09 
 * @Last Modified by: lhx
 * @Last Modified time: 2021-09-18 14:30:48
 */

import FileSaver from 'file-saver';

export default class ExportWord {

    constructor() {}
    /**
     * Creat HTMLTree
     * @param {String} htmlTree html structure
     * @param {String} style The style file
     */
    static _creatHtmlTree (htmlTree, style = '') {

        return `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <style>
                         ${style}
                    </style>
                    </head>
                    <body>
                        ${htmlTree}
                    </body>
                    </html>`
    }
    /**
     * download word
     * @param {Object} htmlObj  htmlObj.htmlStr HTML tree structure; htmlObj.htmlStyle HtmlStyle.
     * @param {String} htmlObj  HTML tree structure.
     * @param {String} docName  export word name
     */
    static downloadWord (htmlObj, docName) {



        if (!htmlObj) {
            console.error('Please check the htmlObj parameter');
            return;
        }
    
        if (!docName) {
            console.error('Please check the docname parameter');
            return;
        }

        let htmlTree = '';
        let style = '';

        // Determine if it contains html objects or str
        if (typeof htmlObj === 'string') {
            htmlTree = htmlObj;
        }
        if (htmlObj instanceof Object && undefined !== htmlObj.htmlStr) {
            htmlTree = htmlObj.htmlStr;
            style = htmlObj.htmlStyle !== null && htmlObj.htmlStyle !== undefined ? htmlObj.htmlStyle : '';
        }
        if (htmlTree === '') {
            console.error('htmlObj param is Empty string');
            return
        }
        try {
            const html = this._creatHtmlTree(htmlTree, style);
            const blob = new Blob([html], {
                type: "application/vnd.ms-word;charset=UTF-8"
            });
            FileSaver.saveAs(blob, docName);
        } catch (error) {
            console.error('Failed to create word document', error);
        }
    }
}