function extractFile(path) {
    let fileInfo = path.split('\\').pop();
    let lastDotIdx = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.slice(0, lastDotIdx);
    let fileExtencion = fileInfo.slice(lastDotIdx + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtencion}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('-------');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');