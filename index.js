        var arr = new Array(9);                   //to store the array of game
        var isConst = new Array(9);               //to store whether an inner-grid-item is constant(immutable)
        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array(9);
            isConst[i] = new Array(9);
            for (var j = 0; j < arr.length; j++) {
                arr[i][j] = 0;
                arr[i][j] = false;
            }
        }

        //SETTING UP ARRAY FOR NEW GAME
        arr[0][1] = 5;
        arr[0][3] = 9;
        arr[0][4] = 3;
        arr[0][7] = 4;
        arr[1][0] = 7;
        arr[1][1] = 4;
        arr[1][4] = 1;
        arr[1][5] = 6;
        arr[2][0] = 6;
        arr[2][6] = 8;
        arr[3][0] = 3;
        arr[3][2] = 1;
        arr[3][6] = 7;
        arr[4][0] = 4;
        arr[4][2] = 5;
        arr[4][3] = 3;
        arr[4][4] = 2;
        arr[4][5] = 7;
        arr[4][7] = 1;
        arr[4][8] = 6;
        arr[5][0] = 2;
        arr[5][2] = 9;
        arr[5][4] = 6;
        arr[5][5] = 5;
        arr[5][6] = 3;
        arr[5][7] = 8;
        arr[5][8] = 4;
        arr[6][1] = 3;
        arr[6][5] = 9;
        arr[7][3] = 6;
        arr[7][4] = 7;
        arr[7][6] = 5;
        arr[7][8] = 8;
        arr[8][0] = 5;
        arr[8][7] = 6;
        arr[8][8] = 9;

        //INITIALISING ISCONST ARRAY FOR CONST ELEMENTS
        isConst[0][1] = true;
        isConst[0][3] = true;
        isConst[0][4] = true;
        isConst[0][7] = true;
        isConst[1][0] = true;
        isConst[1][1] = true;
        isConst[1][4] = true;
        isConst[1][5] = true;
        isConst[2][0] = true;
        isConst[2][6] = true;
        isConst[3][0] = true;
        isConst[3][2] = true;
        isConst[3][6] = true;
        isConst[4][0] = true;
        isConst[4][2] = true;
        isConst[4][3] = true;
        isConst[4][4] = true;
        isConst[4][5] = true;
        isConst[4][7] = true;
        isConst[4][8] = true;
        isConst[5][0] = true;
        isConst[5][2] = true;
        isConst[5][4] = true;
        isConst[5][5] = true;
        isConst[5][6] = true;
        isConst[5][7] = true;
        isConst[5][8] = true;
        isConst[6][1] = true;
        isConst[6][5] = true;
        isConst[7][3] = true;
        isConst[7][4] = true;
        isConst[7][6] = true;
        isConst[7][8] = true;
        isConst[8][0] = true;
        isConst[8][7] = true;
        isConst[8][8] = true;

        function newGame() {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    var p = Math.floor(i / 3) + 1;
                    var q = Math.floor(j / 3) + 1;
                    var r = 3 * (i % 3) + 1 + (j % 3);
                    console.log('item' + p + q + r);
                    var cellText = document.getElementById('item' + p + q + r);
                    var cell = document.getElementById('cell' + p + q + r);

                    if (arr[i][j] != 0 & isConst[i][j]) {
                        cellText.textContent = arr[i][j];
                        cell.style.backgroundColor='rgba(0,0,0,.05)'
                    }
                    else if (arr[i][j] == 0 & !isConst[i][j]) {
                        cellText.textContent = '';
                    }
                    else {
                        cellText.textContent='-1';
                        cell.style.backgroundColor='red';
                    }
                }
            }
        }