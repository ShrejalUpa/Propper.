
document.getElementById('plusIcon').addEventListener('click', function() {
    toggleInfo('additionalInfo');
});

document.getElementById('plusIcon2').addEventListener('click', function() {
    toggleInfo('additionalInfo2');
});

document.getElementById('plusIcon3').addEventListener('click', function() {
    toggleInfo('additionalInfo3');
});

function toggleInfo(infoId) {
    var additionalInfo = document.getElementById(infoId);
    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
    } else {
        additionalInfo.style.display = 'none';
    }
}



function showParagraph(num) {
    // Hide all paragraphs
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`paragraph${i}`).classList.add('hidden');
    }

    // Show the selected paragraph
    document.getElementById(`paragraph${num}`).classList.remove('hidden');
}


document.getElementById('subscribeBtn').addEventListener('click', function() {
    document.getElementById('redCircle').style.display = 'block';
  });
  