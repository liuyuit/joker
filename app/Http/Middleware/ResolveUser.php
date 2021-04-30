<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ResolveUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $request->setUserResolver(function () {
            return [
                'uid' => 1,
                'username' => 'Jack',
            ];
        });

        return $next($request);
    }
}
