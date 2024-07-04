function navigateTo(page) {

    switch (page) {
        case 'start':
            window.location.href ='start.html';
            break;
        case 'pilih-gambar':
            window.location.href ='pilih.html';
            break;
        case 'guide':
            window.location.href ='guide.html';
            break;
        case 'source':
            window.open('https://github.com/Dixxyid/VRuas', '_blank'); // Menggunakan window.open untuk membuka link baru
            break;
        default:
            break;
    }
}
