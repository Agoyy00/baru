<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pengajuan;
use App\Models\PengajuanItem;
use Illuminate\Http\Request;

class PengajuanController extends Controller
{
    /**
     * GET /api/pengajuan
     * Menampilkan seluruh riwayat pengajuan + item + barang
     */
    public function index()
    {
        $pengajuan = Pengajuan::with(['items.barang'])
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($pengajuan);
    }

    /**
     * POST /api/pengajuan
     * Menyimpan pengajuan baru
     */
    public function store(Request $request)
    {
        // Validasi data
        $validated = $request->validate([
            'tahun_akademik'          => 'required',
            'nama_pemohon'            => 'required',
            'jabatan'                 => 'required',
            'unit'                    => 'required',
            'items'                   => 'required|array|min:1',

            // Validasi item
            'items.*.id'              => 'required|integer',
            'items.*.kebutuhanTotal'  => 'required|numeric',
            'items.*.sisaStok'        => 'required|numeric',
            'items.*.jumlahDiajukan'  => 'required|numeric|min:1',
            'items.*.estimasiNilai'   => 'required|numeric',
        ]);

        // Hitung total nilai
        $totalNilai = 0;
        $totalJumlahDiajukan = 0;

        foreach ($request->items as $item) {
            $subtotal = $item['jumlahDiajukan'] * $item['estimasiNilai'];
            $totalNilai += $subtotal;
            $totalJumlahDiajukan += $item['jumlahDiajukan'];
        }

        // Simpan pengajuan
        $pengajuan = Pengajuan::create([
            'tahun_akademik'         => $request->tahun_akademik,
            'nama_pemohon'           => $request->nama_pemohon,
            'jabatan'                => $request->jabatan,
            'unit'                   => $request->unit,
            'status'                 => 'diajukan',
            'total_nilai'            => $totalNilai,
            'total_jumlah_diajukan'  => $totalJumlahDiajukan,
        ]);

        // Simpan semua item
        foreach ($request->items as $item) {
            $subtotal = $item['jumlahDiajukan'] * $item['estimasiNilai'];

            PengajuanItem::create([
                'pengajuan_id'    => $pengajuan->id,
                'barang_id'       => $item['id'],
                'kebutuhan_total' => $item['kebutuhanTotal'],
                'sisa_stok'       => $item['sisaStok'],
                'jumlah_diajukan' => $item['jumlahDiajukan'],
                'harga_satuan'    => $item['estimasiNilai'],
                'subtotal'        => $subtotal, // ✔ sesuai Model kamu
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Pengajuan berhasil dibuat',
            'id'      => $pengajuan->id,
            'total_nilai' => $totalNilai
        ]);
    }
}
