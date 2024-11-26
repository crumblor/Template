const one = document.getElementById('one');
const two = document.getElementById('two');
const thre = document.getElementById('thre');
const four = document.getElementById('four');

function name1() {
    two.style.position = 'absalute'; two.style.display = 'none';
    thre.style.position = 'absalute'; thre.style.display = 'none';
    four.style.position = 'absalute'; four.style.display = 'none';
    one.style.position = 'relative'; one.style.display = 'block';
}

function name2() {
    one.style.position = 'absalute'; one.style.display = 'none';
    thre.style.position = 'absalute'; thre.style.display = 'none';
    four.style.position = 'absalute'; four.style.display = 'none';
    two.style.position = 'relative'; two.style.display = 'block';
}

function name3() {
    one.style.position = 'absalute'; one.style.display = 'none';
    two.style.position = 'absalute'; two.style.display = 'none';
    four.style.position = 'absalute'; four.style.display = 'none';
    thre.style.position = 'relative'; thre.style.display = 'block';
}

function name4() {
    one.style.position = 'absalute'; one.style.display = 'none';
    two.style.position = 'absalute'; two.style.display = 'none';
    thre.style.position = 'absalute'; thre.style.display = 'none';
    four.style.position = 'relative'; four.style.display = 'block';
}