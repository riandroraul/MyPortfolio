      

        const email = document.getElementById('email');
        const nama = document.getElementById('name');
        const pesan = document.getElementById('message');

        nama.setAttribute("placeholder", "Nama Lengkap");
        email.setAttribute("placeholder", "Email Aktif");
        pesan.setAttribute("placeholder", "Tulis Pesan Disini..");


      const scriptURL = 'https://script.google.com/macros/s/AKfycbzAsSLT-77WU_FgHlj20KZqn924PfTyMudVXIIaYbt_0mfXVnIwHL6-1ksXa-sGGsLxFA/exec';
      const form = document.forms['contact-form-google-sheets'];
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert =document.querySelector('.my-alert');
    
        form.addEventListener('submit', e => {
        e.preventDefault();

        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
          // tampilkan tombol kirim hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            // tampilkan alert 
            // myAlert.classList.toggle('d-none');

            //  menggunakan sweetAlert2
        const btn = document.querySelector('.btn');

        
         // const myAlert = function(){
         //          setTimeout(() => { 
         //            swal.fire({
         //              title: 'Terima Kasih!',
         //              text: 'Pesan Anda Terkirim!',
         //              icon: 'success',
         //            })
         //          }, 1500);
         //        }
    
        btn.onclick =  swal.fire({
                      title: 'Terima Kasih!',
                      text: 'Pesan Anda Terkirim!',
                      icon: 'success',
                    });
            // reset formnya
            form.reset();
            console.log('Success!', response)})
          .catch(error => {console.error('Error!', error.message)})
      });

        const sectionAbout = document.querySelector('section #about');
        // container.setAttribute('class', 'text-about');

        // const about = document.querySelector('.text-about');
        
        about.addEventListener('copy', function(){
          swal.fire({
                title: 'Menyalin Text!',
                text: 'Anda menyalin Teks Ini !',
                icon: 'warning',
            });
        });