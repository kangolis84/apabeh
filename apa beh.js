var a = 0;a++;
var b = 0;b++;
        function begin001() 
        
        {
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = options001;
            number001.innerHTML = a++;
        }

        function q1c() {
            message003.innerHTML = "Benar...Good";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=lanjut()>Next</button>";
        }

        function q1i() {
            message003.innerHTML = "Salah..Belajar lagi ya!!";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=lanjut()>Next</button>";
        }

        function lanjut() {
            if (a == "2") {
                message001.innerHTML = question001[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "3") {
                message001.innerHTML = question001[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }


            else if (a == "4") {
                message001.innerHTML = question001[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "5") {
                message001.innerHTML = question001[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "6") {
                message001.innerHTML = question001[5];
                message002.innerHTML = options006;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "7") {
                message001.innerHTML = question001[6];
                message002.innerHTML = options007;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "8") {
                message001.innerHTML = question001[7];
                message002.innerHTML = options008;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "9") {
                message001.innerHTML = question001[8];
                message002.innerHTML = options009;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "10") {
                message001.innerHTML = question001[9];
                message002.innerHTML = options010;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
                 } else if (b > 10) {
                message001.innerHTML = "Selesai" + "<br />" + "Keren...";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=ulang()>Ulang lagi</button>";

            } else if (b > 9) {
                message001.innerHTML = "Selesai" + "<br />" + "Mantap";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=ulang()>Ulang lagi</button>";

            } else if (b > 8) {
                message001.innerHTML = "Selesai" + "<br />" + "Bagus...";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=ulang()>Ulang lagi</button>";

            } else if (b > 7) {
                message001.innerHTML = "Selesai" + "<br />" + "Ok.";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=ulang()>Ulang lagi</button>";

            } else if (b > 6) {
                message001.innerHTML = "Selesai" + "<br />" + "Lumayan";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=ulang()>Ulang lagi</button>";

            } else {
                message001.innerHTML = "Selesai" + "<br />" + "Tetap Semangat dalam belajar.";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message005.innerHTML = (b*=10)*1-10;
                message004.innerHTML = "<button class=buttons002 onclick=ulang()>Ulang lagi</button>";
              
            }   
        }

        function ulang() {
            location.reload();
        }
