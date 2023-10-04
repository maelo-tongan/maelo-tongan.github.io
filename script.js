$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Mencegah form untuk melakukan submit

        // Mengambil nilai dari input form
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

        // Mengarahkan pengguna ke aplikasi WhatsApp di Android atau ke WhatsApp Web di desktop/komputer
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = 'whatsapp://send?phone=6285299747503&text=' + encodeURIComponent(message);
        } else {
            window.open('https://web.whatsapp.com/send/?phone=6285299747503&text=' + encodeURIComponent(message));
        }
    });
});
