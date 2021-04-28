<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <!-- 引入jQuery工具 -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
</head>
<body>
<input type="text" name="username">
<input type="text" name="password">
<button>登陆</button>
</body>
<script type="text/javascript">

    // 请求登陆接口
    $('button').click(function(event) {
        // 还记得前面扫码的链接里，带有 uuid 参数吗。简单的获取 url 中 uuid 参数
        var uuid = location.search.substring(1).split('=')[1];
        // 请求登陆接口
        $.ajax({
            // 这个登陆接口就是上面 routes/web.app 中定义好的路由。因为是 POST 请求，所以会进入 Route::post() 定义的路由中
            url: location.origin+'/login',
            type: 'POST',
            dataType: 'json',
            data: {
                username: $('input[name="username"]').val(),
                password: $('input[name="password"]').val(),
                uuid: uuid,
                // Laravel 默认带有 csrf_token 验证，所以这里要加 _token 变量
                _token: '{{ csrf_token() }}',
            },
            success: function(data){
                console.log(data);
            }
        });
    });

</script>
</html>
