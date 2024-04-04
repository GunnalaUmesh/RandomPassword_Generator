let passwordBox;
        function RandomPass() {
            passwordBox = document.getElementById("password");
            const length = 10;
            const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowercase = "abcdefghijklmnopqrstuvwxyz";
            const Numbers = "0123456789";
            const specialChar = "~!@#$%^&*(){}[];:<>,.?/|\=-`";
            const randomChar = uppercase + lowercase + Numbers + specialChar;
            let pass = "";
            pass += uppercase[Math.floor(Math.random() * uppercase.length)];
            pass += lowercase[Math.floor(Math.random() * lowercase.length)];
            pass += Numbers[Math.floor(Math.random() * Numbers.length)];
            pass += specialChar[Math.floor(Math.random() * specialChar.length)];
            while (pass.length < length) {
                pass += randomChar[Math.floor(Math.random() * randomChar.length)];
            }
            passwordBox.value = pass;
        }
        function copypass(){
            passwordBox.select();
            document.execCommand("copy");
        }