<?php

namespace App\Providers;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $attribute = ['middleware' => ['resolve_user'],];
        Broadcast::routes($attribute);

        require base_path('routes/channels.php');
    }
}
