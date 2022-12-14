<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrow Functions</title>
</head>
<body>
    <div class="container">
        This is arrow functions tutorial.
    </div>
    <script>
    // Arrow function
    // let greet =  ()=> {
    //     console.log('Good morning');
    // }

    let greet =  () => console.log('Good morning');
    

    // let sum2 = (a, b)=>{
    //     return a+b;
    // };

    let sum2 = (a, b) => a+b; 
    let half = a => a/2;  

    // function greet() {
    //     console.log('Good morning');
    // }

    greet();
    setTimeout(() => {
        console.log("We are inside settimeout");
    }, 3000);

    let obj1={
        greeting: "Good Morning",
        names: ["Ansha", "Rohan", "SkillF", "DjKhiladi"],
        speak(){
            this.names.forEach((student)=>{
                console.log(this.greeting + " Kukdoo Koo " + student);
            });
        }
    }
    obj1.speak();
    </script>
</body>
</html>
