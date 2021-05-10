<!DOCTYPE html>
<html>
<head>
    <title>private channel</title>
    <!-- 引入jQuery工具 -->
    <script src="/static/js/pusher/jquery.min.js"></script>
    <!-- 引入二维码工具 -->
    <script src="https://cdn.jsdelivr.net/npm/jquery.qrcode@1.0.3/jquery.qrcode.min.js"></script>
    <!-- 引入laravel-echo工具，其实使用Larave自带的也可以。但是，使用自带的还需要用到node前端构建工具，我这里只简单的演示后端实现过程，就不用node了 -->
    <script src="/static/js/pusher/echo.iife.js"></script>
    <!-- 引入pusher工具，pusher是Laravel-echo底层，Laravel-echo是pusher的一层封装 -->
    <script src="/static/js/pusher/pusher.js"></script>
</head>
<body>
<h1>private channel</h1>
<button id="private">sent to private channel</button>
</body>
<script type="text/javascript">

    // 简单模拟一个 uuid 唯一身份码，为了后端广播时，不会广播给错人
    var uuid = Math.round(Math.random() * 1000000);

    // 初始化 laravel-echo 插件
    window.Echo = new Echo({
        // 这里是固定值 pusher
        broadcaster: 'pusher',
        // 这里要和你在 .env 中配置的 PUSHER_APP_KEY 保持一致
        key: 'joker',
        wsHost: location.hostname,
        wsPath: '/websocket-handler',
        // 这里是我们在上一步启动 socket 监听的端口
        wsPort: 2020,
        // 这个也要加上
        forceTLS: false,
        auth: {
            params: {
                uuid: uuid,
            },
         },
        params: {
            key: 'joker',
        },
    });

    Echo.private('private.' + uuid)
        .listen('privateEvent', (e) => {
            console.log('receive ', e);
        });

    $('#private').click(function() {
        $.ajax({
            url: 'sent-private-channel',
            data: {uuid: uuid},
            success: function(e) {
                console.log(e);
            }
        })
    })



    // 我们随便监听一个频道，这个频道在项目还不存在，但不影响建立 socket 连接
    // Echo.channel('abcdefg.'+uuid)
    // // 随便监听一个事件，这个事件在项目中还不存在，但不影响建立 socket 连接
    //     .listen('LoginedEvent', (e) => {
    //         console.log(e);
    //         // 从登陆事件广播出来的数据中，取出 session_id 字段
    //         var session_id = e.session_id;
    //         // 拼接好参数后，跳转到指定页面，也就是当前页面
    //         location.href = location.origin+'/hello?session_id='+session_id;
    //     });
    //
    // // 显示一个二维码，内容是一个登陆页地址，后面拼接 uuid。这个 uuid 会在后面广播中用到，用来给监听此 uuid 频道的 socket 发送数据
    // $("body").qrcode(location.origin+"/login?uuid="+uuid);

</script>
</html>
