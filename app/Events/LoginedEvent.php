<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

// 首先要让这个事件类实现 ShouldBroadcast 接口，也就是在类名后加上 implements ShouldBroadcast 即可。
class LoginedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    // 只有 punlic 属性的变量会被广播到指定的频道中，所以这里要使用 public 关键字修饰你需要广播的变量
    public $logined_info;
    // 加入新的变量 $session_id
    public $session_id;

    public function __construct($logined_info)
    {
        $this->logined_info = $logined_info;
        $this->session_id = session()->getId();
    }

    // 实现 ShouldBroadcast 接口后，就必须实现这个方法，系统会自动将广播发送到这个方法中定义的频道中
    public function broadcastOn()
    {
        // 这里我们改为 Channel。原 PrivateChannel 是私有频道，未登录时前端无法监听
        // 这里的频道要与 routes/channels.php 中定义的频道格式保持一致
        return new Channel('abcdefg.'.$this->logined_info['uuid']);
    }
}
