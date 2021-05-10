<?php

namespace App\Http\Controllers;

use BeyondCode\LaravelWebSockets\Apps\AppProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    public function index(AppProvider $apps)
    {
        Log::debug('debug');
        $allApp = $apps->all();
        dd($apps);
    }
}
