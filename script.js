$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Mencegah form untuk melakukan submit

        // Mengambil nilai dari input formm
        var nama = $('#nama').val();
        var alamat = $('#alamat').val();
        var telepon = $('#telepon').val();
        var pendidikan = $('#pendidikan').val();
        var pengalaman = $('#pengalaman').val();

        // Format pesan WhatsApp
        var message = 'Halo, saya ingin mendaftar dengan data sebagai berikut:\n\n' +
            'Nama Lengkap: ' + nama + '\n' +
            'Alamat Lengkap: ' + alamat + '\n' +
            'Nomor Telepon: ' + telepon + '\n' +
            'Pendidikan Terakhir: ' + pendidikan + '\n' +
            'Pengalaman Kerja (jika ada): ' + pengalaman;

        // Mengirim pesan WhatsApp
        window.open('https://web.whatsapp.com/send/?phone=6285299747503&text=' + encodeURIComponent(message));
    });
});
