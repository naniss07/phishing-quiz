// js/questions.js
const questionsData = [
    {
        "image": "resimler/resim1.png",
        "correct": "phishing",
        "explanation": "Dikkat ederseniz bağlantının üzerinde ki adresin VİSA'ya ait olmadığını göreceksiniz."
    },
    {
        "image": "resimler/resim2.png",
        "correct": "phishing",
        "explanation": "E-posta göndericisinin alan adı doğru ama bağlantıdaki alan adı yanlış"
    },
    {
        "image": "resimler/resim3.png",
        "correct": "phishing",
        "explanation": "Bu açık bir kimlik avı girişimi: Gönderici adresi PayPal değil PayPAUL"
    },
    {
        "image": "resimler/resim4.png",
        "correct": "phishing",
        "explanation": "Burada dolandırıcılar, kullanıcıları kandırıp harakete geçmeye teşvik etmek için yaygın olarak kullanılan bir tekniğe başvurmuş ve durumun aciliyetini vurgulamaış. Hedefini iletişimidevam ettirmek için telefon numarsı vererek sömürmeye çalışılıyor"
    },
    {
        "image": "resimler/resim5.png",
        "correct": "phishing",
        "explanation": "Yukardaki word dosyasında, dos komutu içerebilen (Word Markoları olarak da bilinen) tehlikeli bir eklentiye sahip kimlik avı e-postasıdır. Ayrıca, alan adına bakarak bunun bir kimlik avı girişimi olduğunu tespit edebilirsiniz, alan adında apple yerine apple-itunes365.cn yazıyor"
    },
    {
        "image": "resimler/resim6.png",
        "correct": "real",
        "explanation": "Gönderici bilgisi doğru, eklerde şüpheli bir durum yok. Bu meşru bir Dropbox iletişimi. Gönderen 'dropboxmail.com'. Alışılmadık olmakla birlikte meşru olan bu URL, 'dropbox.com'a yönlendiren güvenli bir bağlantı (https)."
    },
    {
        "image": "resimler/resim7.png",
        "correct": "phishing",
        "explanation": "Kimlik avi yapan bu kişi, açil bir durum olduğunu vurgulayarak kulalnıcıya korkutmaya çalışıyor. 2 adımlı doğrulama kodunu, anlık olarak başlattığınız doğrulama süreci (ör. web sitesine giriş yaparken veya bankanızla telefonda konuşurken) haricinde hiçbir yerde paylaşmayın. Mümkün olduğunda, geçiş anahtarları veya telefonu güvenlik anahtarı olarak kullanma gibi kimlik avına karşı korunaklı seçenekleri de göz önünde bulundurmalısınız."
    },
    {
        "image": "resimler/resim8.png",
        "correct": "phishing",
        "explanation": "Dikkat ederseniz bağlantının üzerinde ki adresin doğru yere göndertmiyor ve Gönderici e-posta adresine daha yakından baktığınızda, bunun bir şirketten ziyade kişisel bir e-posta adresi olduğunu göreceksiniz."
    },
    {
        "image": "resimler/resim9.png",
        "correct": "phishing",
        "explanation": "Dikat ederseniz 'PTT-Noreply-YRJ3a2z@854876585847565.it' gerçek bir PTT adresi değil. Link üzerine gelindiğinde görülen 'ptt-kargotakip.xyz' adresi resmi PTT domain'i değil !!"
    },
    {
        "image": "resimler/resim10.png",
        "correct": "phishing",
        "explanation": "Göndericinin adresi şüpeli, kişi burda FindMy kullanılarak iPhone'u izlendiğinde kullanıcının alacağı e-posta bildirimini taklit eder."
    },
    {
        "image": "resimler/resim11.png",
        "correct": "real",
        "explanation": "Gönderici bilgisi doğru, eklerde şüpheli bir durum yok. Yapılan bir satın alma işlemini kullanıcıya bildirir ve ayrıntılarını doğrular."
    },
    {
        "image": "resimler/resim12.png",
        "correct": "phishing",
        "explanation": "Gönderenin e-posta adresi şüpheli bir etki alanından (sharepoint.com) geliyor. Ve E-posta, cazip bir dosya indirmenizi istiyor. Dikkat!!!!!!"
    },
    {
        "image": "resimler/resim13.png",
        "correct": "phishing",
        "explanation": "Burda saldırgan sizin hesabınızdan para çıkışı olucak iddası ile karşı tarafı korkutarak E-postadaki bağlantıya tıklayarak, kişisel bilgilerinizi çalmaya çalışıyor."
    },
    {
        "image": "resimler/resim14.png",
        "correct": "phishing",
        "explanation": "Selamlama geneldir. Bir devlet gelir kurumu, bir e-postada asla geri ödeme tutarı gibi belirli bir bilgi vermez. Ayrıca, mesajın altındaki Link üzerine gelindiğinde görülen 'vergiiade-gov.xyz' adresi resmi bir devlet kurumu domain'i değil"
    },
    {
        "image": "resimler/resim15.png",
        "correct": "phishing",
        "explanation": "'plop.co' gibi güvenilir olmayan bir domain adresi kullanılıyor ve acil karar vermeye zorlamak için bir süre sınırı belirlenmiş. Eğer verilen talimatları takip edip formu doldurursanız, kullanıcı kimliğiniz, şifreniz ve diğer hassas bilgilerinizi siber suçlulara ifşa etme riskiyle karşı karşıya kalırsınız."
    },
    {
        "image": "resimler/resim16.png",
        "correct": "real",
        "explanation": "E-posta kişiselleştirilmiştir. Selamlama müşteri/şirket adını içerir. Doğrulama için kısmi bir hesap numarası verilir. Banka, politikasına uygun olarak, çevrimiçi bankacılık hizmetlerine bir köprü sağlamadığını, bunun yerine müşterileri her zamanki gibi oturum açmaya davet ettiğini belirtir. Kişisel bilgi talebi bulunmamaktadır."
    },
    {
        "image": "resimler/resim17.png",
        "correct": "phishing",
        "explanation": "Gönderici adı doğru değil 'PayPal' olarak görünse de, aslında sahtedir Burda size bir para transferi oldu bildirimi yaparak korkutmaya çalışılmış bu şekilde kişisel bilgilerinizi çalmak amaclıyorlar. "
    },
    {
        "image": "resimler/resim18.png",
        "correct": "phishing",
        "explanation": "Dikkat ederseniz gönderici adresi 'akbonk-guvenlik.com' (Akbank değil) ve size bir aciliyet oluşturan, korku ve endişeye yönelik bir mesaj barındırmış bu şekilde sizde o an hem linke tıklayıp hesap bilgilerinizi verebilirsiniz."
    },
    {
        "image": "resimler/resim19.png",
        "correct": "real",
        "explanation": "Gönderici bilgisi doğru, Bağlantı gerçek Microsoft Teams domain'ine yönlendiriyor"
    },
    {
        "image": "resimler/resim20.png",
        "correct": "phishing",
        "explanation": "Gönderici adresi sahte (garantibbva-mobil.org) ve  Bağlantı resmi banka sitesine değil, sahte bir siteye yönlendiriyor. Bu şekilde siz başka bir yere bilgilerinizi girmiş oluyorsun."
    },
    {
        "image": "resimler/resim21.png",
        "correct": "phishing",
        "explanation": "Bu bir oltalama SMS'idir Dikkat ederseniz Resmi olmayan domain uzantısı (.co). Aciliyet oluşturan, endişeye yönelik mesaj içeriği bulunmaktadır. Bu şekilde sizin hesap bilgilerinizi erişebilicek."
    },
    {
        "image": "resimler/resim22.png",
        "correct": "phishing",
        "explanation": "Aciliyet oluşturan mesaj bulunmakta bu şekilde sizi endişeye sokmaktadrlar. Verilen linkin yönlendirmeside Güvenilir olmayan bir ödeme bağlantısına gönderiyor."
    },
    {
        "image": "resimler/resim23.png",
        "correct": "phishing",
        "explanation": "Bankalar genellikle SMS ile şifre sıfırlama bağlantısı göndermez, Acil eylem gerektiren tehdit içerikli mesaj bulunmakta ve  Şüpheli domain uzantısı (.xyz) bulunuyor sahte bir domaindir."
    },
    {
        "image": "resimler/resim24.png",
        "correct": "phishing",
        "explanation": "Bankanız limit değişikliklerini SMS üzerinden onaylatmaz. Görünürde doğru domain (akbank.com.tr) gösterilirken, gerçek URL farklı. Linklerin nereye yönlendirdiğine dikkat edin, önce kontrol edin."
    },
    {
        "image": "resimler/resim25.png",
        "correct": "phishing",
        "explanation": "Aciliyet oluşturan zaman baskısı ('Son 2 saat!'). Gerçek dışı yüksek miktar ve Bağlantı sizi farklı bir siteye yönlendiriyor olabilir kontrol etmek lazım."
    },
    {
        "image": "resimler/resim26.png",
        "correct": "phishing",
        "explanation": "PTT kargo takip numarası formatı yanlış verilmiş. Normalde Kargo teslim edilememe durumunda ödeme talep edilmez"
    },
    {
        "image": "resimler/resim27.png",
        "correct": "real",
        "explanation": "Gönderici adı doğru formatta, Resmi banka domain'i bulunmaktadır ve Enpara'dan gelen rutin bir bilgilendirmedir. Hesabınıza yapılan transferi gösterir."
    },
    {
        "image": "resimler/resim28.png",
        "correct": "phishing",
        "explanation": "Yüksek miktarlı sahte işlem bildirimi ile Korku ve panik yaratarak acil eylem talep etmeye çalışıyor. 'isbank-tr.com' gibi resmi olmayan alan adı bunmakta."
    },
    {
        "image": "resimler/resim29.png",
        "correct": "real",
        "explanation": "Dikkat ederseniz gönderen adres @amazon.com.tr uzantılıdır, Tüm bağlantılar amazon.com.tr alan adına yönlenmektedir. Büyük şirketler, resmi e-postalarında 'Sayın [Adınız]' gibi kişisel hitaplar kullanır."
    },
    {
        "image": "resimler/resim30.png",
        "correct": "real",
        "explanation": "Gönderici adresi doğrudur.  Bu e-postada, kullanıcıya LinkedIn'de yeni bir mesajı olduğu bildiriliyor ve mesajı görüntülemek için bir bağlantı sağlanıyor. Bağlantı alanına geldiğinizde bağlantı doğru adrese yönlendirmektedir"
    }
];