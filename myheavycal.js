var num = 0;

function counter() {
    num++; // num = num + 1;
    postMessage(num);
    setTimeout("counter()",500);
}

counter();