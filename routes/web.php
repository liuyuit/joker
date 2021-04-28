<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    // 首页显示二维码
    return view('hello');
});

Route::get('login', function () {
    // 扫码后，手机显示的登陆页
    return view('login');
});

Route::post('/login', function (\Illuminate\Http\Request $request) {
    // 为了尽可能简化流程，我们就不执行数据库查询的逻辑了，直接在 session 中写入信息吧
    session([
        'login_info' => $request->all(),
    ]);
    // 触发登录事件
    event(new \App\Events\LoginedEvent(session('login_info')));

    // 返回响应
    return response([
        'code' => 0,
        'message' => '登陆成功',
        'data' => session('login_info'),
    ]);
});
