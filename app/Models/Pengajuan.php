<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pengajuan extends Model
{
    protected $fillable = [
        'tahun_akademik',
        'nama_pemohon',
        'jabatan',
        'unit',
        'status',
        // kalau nanti kamu tambahin kolom total_nilai / total_jumlah_diajukan di migration,
        // bisa tambahin juga di sini.
        // 'total_nilai',
        // 'total_jumlah_diajukan',
    ];

    public function items(): HasMany
    {
        return $this->hasMany(PengajuanItem::class);
    }
}
