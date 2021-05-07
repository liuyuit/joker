<?php

namespace App\Http\Controllers;

use BeyondCode\LaravelWebSockets\Apps\AppProvider;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(AppProvider $apps)
    {
        $allApp = $apps->all();
        dd($apps);
    }
}
