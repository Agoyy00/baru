<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    protected $fillable = [
        'kode',
        'nama',
        'foto',          // ⬅️ tambahkan ini
        'satuan',
        'stok',
        'harga_satuan',
    ];
}
