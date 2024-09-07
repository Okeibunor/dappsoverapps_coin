document.getElementById('compressBtn').addEventListener('click', compressFile);
document.getElementById('decompressBtn').addEventListener('click', decompressFile);

function compressFile() {
    const fileInput = document.getElementById('fileInput').files[0];
    if (!fileInput) {
        alert('Please upload a file.');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const fileData = e.target.result;
        const outputText = document.getElementById('outputText');
        const outputImage = document.getElementById('outputImage');
        
        if (fileInput.type.startsWith('image/')) {
            // Compress image
            const img = new Image();
            img.src = fileData;
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width / 2;  // Compress by reducing size
                canvas.height = img.height / 2;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const compressedData = canvas.toDataURL('image/jpeg', 0.5);  // Compress further by reducing quality
                outputImage.src = compressedData;
                outputImage.style.display = 'block';
                outputText.style.display = 'none';
            };
        } else {
            // Compress text or document
            const compressed = btoa(fileData);  // Base64 encoding for simplicity
            outputText.value = compressed;
            outputImage.style.display = 'none';
            outputText.style.display = 'block';
        }
    };
    
    reader.readAsDataURL(fileInput);
}

function decompressFile() {
    const fileInput = document.getElementById('fileInput').files[0];
    if (!fileInput) {
        alert('Please upload a file.');
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function(e) {
        const fileData = e.target.result;
        const outputText = document.getElementById('outputText');
        const outputImage = document.getElementById('outputImage');
        
        if (fileInput.type.startsWith('image/')) {
            // Decompress image (show original)
            outputImage.src = fileData;
            outputImage.style.display = 'block';
            outputText.style.display = 'none';
        } else {
            // Decompress text or document
            const decompressed = atob(fileData.split(',')[1]);  // Base64 decoding
            outputText.value = decompressed;
            outputImage.style.display = 'none';
            outputText.style.display = 'block';
        }
    };
    
    reader.readAsDataURL(fileInput);
}
