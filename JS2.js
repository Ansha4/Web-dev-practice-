<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JavaScript | Strings and String Methods</title>
</head>

<body>
    <div class="container">
        <h1>Lorem ipsum dolor sit.</h1>
        <div id="content"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi, quaerat corrupti quas, illum nobis tempore sequi cumque laboriosam magni expedita earum? Similique corrupti nam magni reprehenderit quia vero, reiciendis eius officiis doloremque ipsa?</p>
    </div>
    <script>
    // var string = "this";
    var string = 'thi"s';
    var name = 'ANSHA';
    var channel = 'CodeWithHarry';
    var message = 'ANSHA is a good girl';
    var temp = `${name} is a 'nice' person "and" he has a channel called ${channel}`;
    
    var y = new String("this");
    console.log(y);
    document.getElementById('content').innerHTML = '<h3>this is an h3 heading</h3>'
    
    </script>
</body>
</html>
