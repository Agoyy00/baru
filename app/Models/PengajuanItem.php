<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PengajuanItem extends Model
{
    protected $fillable = [
        'pengajuan_id',
        'barang_id',
        'kebutuhan_total',
        'sisa_stok',
        'jumlah_diajukan',
        'harga_satuan',
        'subtotal', // jumlah_diajukan * harga_satuan
    ];

    public function pengajuan(): BelongsTo
    {
        return $this->belongsTo(Pengajuan::class);
    }

    public function barang(): BelongsTo
    {
        return $this->belongsTo(Barang::class);
    }
}
