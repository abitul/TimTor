import { Component } from "@angular/core";
import { ModalController, NavController, NavParams } from "ionic-angular";
import { DetailInfoPage } from "../detailinfo/detailinfo";
import { SearchPage } from "../search/search";
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  films: Observable<any>;
  selectedItem: any;
  icons: string[];
  allProduct: Array<{
    title: string;
    price: string;
    date: string;
    image: string;
    description: string;
  }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public http: Http
  ) {
    
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJvcGVuaWQiXSwiZXhwIjoxNTExMTYzMjA5LCJqdGkiOiJiN2Y2NzA4Yy02ZDBiLTQ5OTMtOGRjYi03ZjRmN2Q1NjEyZmMiLCJjbGllbnRfaWQiOiJlbWVyaW8ifQ.UjKbXGwahXWiUxxvG-5MhlLjCWg1mvSTW3TsYVzApW88XADItJdaItxjG8I1BmVvqCelXCRhCdysaVu3bbFV2FFiFgux96g4_UW_L8rKBQ4Hq6r7k2ahAaScfpgQD_bOhDZUhqPT8NX7z-DOIupqVuyK41o601YcuYf73KAY-XaQXm6rZE-oFJeTI7Y2aCanPj5h4T8RobDGcrayBIn-P_Lqw5a-C1KTjtCp3IWhM1z5JGovbvfXPIGX_RuhIlNUl1pxPNEOHEQHhqbecMo1mfXt52AI1EdSmXGATFtaTKtBkgSxqb_JRht9tbfJ1We6AybH-j2-7Hm0Eu7GO8_Srg' );
    let options = new RequestOptions({ headers: headers });

    let postParams =
    {
      "dob":"1982-02-18",
      "nik":"3215031802820005",
      "contractNo":"1000013922001"
    }
    this.http.post("http://192.168.29.57:9000/bcaf-proxy/bcaf-service/mobile/validateContract", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
    // var paramsGet = {params:{"page": 1, "max": 10, searchValue:""}};
    // this.http.get("http://localhost:8080/allUser",paramsGet).map(res => res.json())
    // .subscribe(data => {
    //   console.log('my data: ', data);
    // })

    this.selectedItem = navParams.get("item");
    this.allProduct = [
      {
        title: "Honda Tiger 2012",
        date: "" + Date.now(),
        price: "USD 900",
        image: "assets/img/tiger1.jpg",
        description:"Nama Candi Borobudur tentunya sudah tak asing lagi bagi Anda. Candi ini disebut sebagai kompleks candi Buddha terbesar di Indonesia, bahkan juga terbesar dunia. UNESCO menetapkannya sebagai salah satu situs warisan dunia pada tahun 1991. Selain menjadi cagar budaya dunia, Candi Borobudur juga menjadi salah satu tempat wisata yang menarik banyak perhatian wisatawan domestik dan juga mancanegara. Tempat wisata di Jawa Tengah ini memiliki luas 123 x 123 meter persegi dan terdiri dari 10 tingkat. Bangunannya tersusun dari balok vulkanik yang membentuk 504 arca, 72 stupa dan sebuah stupa induk besar di puncaknya. Uniknya, balok-balok ini tersusun tanpa menggunakan perekat ataupun semen, kompleks ini terlihat seperti sebuah susunan lego raksasa. Dinding Candi Borobudur dihiasi sekitar 1.460 panel relief dengan panjang masing-masing panel 2 meter. Panel-panel relief ini menceritakan mengenai tingkatan kehidupan Buddha. Relief di bagian bawah candi disebut dengan ‘Kamadathu’ yang menceritakan tentang perilaku buruk manusia yang dipenuhi nafsu dunia dan membuatnya masuk neraka. Relief bagian tengah disebut ‘Rapadathu’, bercerita tentang manusia yang sudah terbebas dari hawa nafsu dunia, sedangkan relief teratas adalah ‘Arupadhatu’. Relief ini menggambarkan tingkatan pencapaian teratas di mana para dewa bersemayam. Selain tiga relief tersebut, sebenarnya masih ada panel relief di bagian terbawah candi yang terkubur. Menurut para ahli sejarah, relief yang terkubur tersebut bernama ‘Karmawibhangga’. Inilah relief yang menceritakan mengenai tingkatan terbawah manusia. Relief ini menggambarkan perilaku buruk manusia yang mengikuti hawa nafsunya seperti membunuh, bergosip dan memerkosa. Bahkan disebutkan ada gambar hubungan suami istri. Penguburan panel relief ini memiliki dua alasan yaitu karena relief yang dianggap tidak sopan dan karena upaya pengokohan agar candi tetap berdiri tegak. Candi Borobudur disebut sebagai salah satu mahakarya terbesar manusia sepanjang sejarah. Susunan balok vulkanik dan pahatan reliefnya merupakan sebuah karya seni yang tak tertandingi nilainya. Tempat wisata ini juga menjadi bukti kemajuan peradaban manusia zaman dahulu dalam bidang arsitektur, teknologi dan seni sastra. Di kompleks ini terdapat dua museum yaitu Museum Samudera Raksa dan Museum Karmawibhangga. Museum Samudera Raksa berisi berbagai koleksi dan informasi mengenai sejarah perdagangan Asia – Afrika pada zaman dahulu, sedangkan Museum Karmawibhangga berisi informasi mengenai pembangunan Candi Borobudur. Tak hanya bangunan candi yang menarik perhatian, namun juga pemandangan alam di sekitarnya. Di sebelah selatan candi terdapat Bukit Manoreh yang jika dilihat bentuknya menyerupai seseorang dalam posisi tidur. Selain Bukit Manoreh, masih ada Gunung Sumbing, Gunung Sindoro, Gunung Merbabu, dan Gunung Merapi yang mengelilingi bangunan megah ini. Candi Borobudur diperkirakan mulai dibangun pada masa Dinasti Syailendra sekitar abad ke-9 di bawah pemerintahan Raja Samaratungga. Arsitek pembangunan kompleks candi bernama Gunadharma yang berhasil merancang bangunan luar biasa ini meskipun tak mengenal sistem komputer dan teknologi canggih lainnya. Pembangunan kompleks candi terbesar ini dapat diselesaikan sekitar 50-70 tahun kemudian. Nama Borobudur berasal dari bahasa Sansekerta ‘Vihara Buddha Uhr’ yang berarti Biara Buddha di Bukit. Pada masa itu, Candi Borobudur menjadi pusat kegiatan keagamaan terbesar. Sampai saat masuknya pengaruh Islam pada abad ke-15. Candi ini mulai ditinggalkan oleh masyarakat yang beralih ke agama Islam. Borobudur semakin terlupakan saat terjadi letusan Gunung Merapi yang membuatnya terkubur abu vulkanik. Pada tahun 1814, Sir Thomas Stamford Raffles mengungkap keberadaan Candi Borobudur setelah mendapat informasi mangenai adanya sebuah bangunan besar yang tertimbun abu vulkanik. Tak hanya tertimbun abu vulkanik, kondisi candi saat ditemukan juga dipenuhi semak belukar. Sejak ditemukan kembali, pemugaran dan berbagai usaha rekonstruksi candi dilakukan mulai dari masa penjajahan Inggris, Belanda sampai saat Indonesia telah merdeka. Dengan bantuan dari UNESCO dan para ahli sejarah budaya dari berbagai belahan dunia, Indonesia terus berupaya memperbaiki kondisi Candi Borobudur. Setelah lebih dari sepuluh abad terbaikan dan tak terpelihara, kompleks candi ini tetap berdiri kokoh sampai saat ini. Ada banyak sekali hal yang bisa Anda lakukan selama berada di kompleks candi Buddha paling besar di dunia ini, di antaranya: Jika Anda menyukai seni sastra dan budaya, berada di Candi Borobudur tentunya akan menjadi pengalaman yang menarik sekali. Anda bisa membaca dan mengamati panel relief yang tergambar di dinding candi. Untuk dapat membaca cerita relief ini secara berurutan, Anda harus berjalan mengitari candi searah putaran jarum jam yaitu dari kiri ke kanan. Mulailah dari pintu timur di tingkatan terbawah dan berjalanlah memutar sampai kembali ke pintu awal kemudian naik tangga ke tingkatan berikutnya. Lakukan hal ini terus-menerus sampai ke tingkatan teratas untuk mendapatkan cerita yang berurutan dan utuh. Anda mengalami kesulitan membaca cerita di relief? Tak perlu bingung karena ada jasa pemandu yang siap membantu Anda. Tempat wisata ini menawarkan banyak sekali objek foto yang menarik untuk Anda, penggemar fotografi. Cobalah berkeliling kompleks candi ini dan temukan angle yang pas untuk memotret. Candi Borobudur juga dikenal memiliki pemandangan matahari terbit dan terbenam yang cantik. Datanglah pada momen yang tepat, siapkan kamera Anda dan selamat mengabadikan pemandangan cantiknya. Di kompleks Candi Borobudur terdapat pelataran hijau luas yang bisa Anda jelajahi. Selain dengan berjalan kaki, Anda bisa menyewa sepeda untuk mengelilingi tempat wisata ini. Anda membawa anak kecil? Cobalah naik kereta kelinci yang pastinya disukai anak-anak. Jika ingin mencoba pengalaman yang berbeda, kenapa tak mencoba naik andong untuk berkeliling? Candi Borobudur menjadi salah satu tempat peribadatan berpengaruh bagi umat Buddha di dunia. Setiap tahunnya, kompleks candi ini menjadi pusat perayaan hari raya Waisak dan didatangi oleh umat Buddha dari berbagai negara seperti Thailand, Kamboja, Cina dan Tibet. Hari raya Waisak dirayakan pada saat bulan purnama di bulan Mei atau biasa disebut dengan Purnama Siddhi. Puncak dari perayaan Waisak ini mengundang banyak wisatawan baik domestik maupun mancanegara. Pada saat itu dilakukan pelepasan ratusan lampion ke langit beserta harapan terbaik untuk satu tahun ke depan."
      },
      {
        title: "Honda Tiger Mulus 2017",
        date: "" + Date.now(),
        price: "USD 1.100",
        image: "assets/img/tiger2.jpg",
        description: "assets/img/tiger2.jpg"
      },
      {
        title: "Tiger 2014",
        date: "" + Date.now(),
        price: "USD 800",
        image: "assets/img/tiger3.jpg",
        description: "assets/img/tiger3.jpg"
      },
      {
        title:"Vario new 125 2014",
        date: "" + Date.now(),
        price: "USD 1.500",
        image: "assets/img/vario1.jpg",
        description: "assets/img/vario1.jpg"
      },
      {
        title: "Vario 150 New 2017",
        date: "" + Date.now(),
        price: "USD 1.900",
        image: "assets/img/vario2.jpg",
        description: "assets/img/vario2.jpg"
      },
      {
        title: "Vario 125 LED 2015",
        date: "" + Date.now(),
        price: "USD 930",
        image: "assets/img/vario3.jpg",
        description: "assets/img/vario3.jpg"
      },
      {
        title: "NMAX Mantap 2017",
        date: "" + Date.now(),
        price: "USD 990",
        image: "assets/img/nmax1.jpg",
        description: "assets/img/nmax1.jpg"
      },
      {
        title: "NMAX New 2016",
        date: "" + Date.now(),
        price: "USD 990",
        image: "assets/img/nmax2.jpg",
        description: "assets/img/nmax2.jpg"
      },
      {
        title: "NMAX Gagah 2016",
        date: "" + Date.now(),
        price: "USD 990",
        image: "assets/img/nmax3.jpg",
        description: "assets/img/nmax3.jpg"
      }
    ];
  }

  DetailInfo(event, news) {
    this.navCtrl.push(DetailInfoPage, {
      image: news.image,
      title: news.title,
      date: news.date,
      description: news.description
    });
  }

  newProduct = [
    {
        title: "Honda Tiger 2012",
        date: "" + Date.now(),
        price: "USD 900",
        image: "assets/img/tiger1.jpg",
        description:
          "Nama Candi Borobudur tentunya sudah tak asing lagi bagi Anda. Candi ini disebut sebagai kompleks candi Buddha terbesar di Indonesia, bahkan juga terbesar dunia. UNESCO menetapkannya sebagai salah satu situs warisan dunia pada tahun 1991. Selain menjadi cagar budaya dunia, Candi Borobudur juga menjadi salah satu tempat wisata yang menarik banyak perhatian wisatawan domestik dan juga mancanegara. Tempat wisata di Jawa Tengah ini memiliki luas 123 x 123 meter persegi dan terdiri dari 10 tingkat. Bangunannya tersusun dari balok vulkanik yang membentuk 504 arca, 72 stupa dan sebuah stupa induk besar di puncaknya. Uniknya, balok-balok ini tersusun tanpa menggunakan perekat ataupun semen, kompleks ini terlihat seperti sebuah susunan lego raksasa. Dinding Candi Borobudur dihiasi sekitar 1.460 panel relief dengan panjang masing-masing panel 2 meter. Panel-panel relief ini menceritakan mengenai tingkatan kehidupan Buddha. Relief di bagian bawah candi disebut dengan ‘Kamadathu’ yang menceritakan tentang perilaku buruk manusia yang dipenuhi nafsu dunia dan membuatnya masuk neraka. Relief bagian tengah disebut ‘Rapadathu’, bercerita tentang manusia yang sudah terbebas dari hawa nafsu dunia, sedangkan relief teratas adalah ‘Arupadhatu’. Relief ini menggambarkan tingkatan pencapaian teratas di mana para dewa bersemayam. Selain tiga relief tersebut, sebenarnya masih ada panel relief di bagian terbawah candi yang terkubur. Menurut para ahli sejarah, relief yang terkubur tersebut bernama ‘Karmawibhangga’. Inilah relief yang menceritakan mengenai tingkatan terbawah manusia. Relief ini menggambarkan perilaku buruk manusia yang mengikuti hawa nafsunya seperti membunuh, bergosip dan memerkosa. Bahkan disebutkan ada gambar hubungan suami istri. Penguburan panel relief ini memiliki dua alasan yaitu karena relief yang dianggap tidak sopan dan karena upaya pengokohan agar candi tetap berdiri tegak. Candi Borobudur disebut sebagai salah satu mahakarya terbesar manusia sepanjang sejarah. Susunan balok vulkanik dan pahatan reliefnya merupakan sebuah karya seni yang tak tertandingi nilainya. Tempat wisata ini juga menjadi bukti kemajuan peradaban manusia zaman dahulu dalam bidang arsitektur, teknologi dan seni sastra. Di kompleks ini terdapat dua museum yaitu Museum Samudera Raksa dan Museum Karmawibhangga. Museum Samudera Raksa berisi berbagai koleksi dan informasi mengenai sejarah perdagangan Asia – Afrika pada zaman dahulu, sedangkan Museum Karmawibhangga berisi informasi mengenai pembangunan Candi Borobudur. Tak hanya bangunan candi yang menarik perhatian, namun juga pemandangan alam di sekitarnya. Di sebelah selatan candi terdapat Bukit Manoreh yang jika dilihat bentuknya menyerupai seseorang dalam posisi tidur. Selain Bukit Manoreh, masih ada Gunung Sumbing, Gunung Sindoro, Gunung Merbabu, dan Gunung Merapi yang mengelilingi bangunan megah ini. Candi Borobudur diperkirakan mulai dibangun pada masa Dinasti Syailendra sekitar abad ke-9 di bawah pemerintahan Raja Samaratungga. Arsitek pembangunan kompleks candi bernama Gunadharma yang berhasil merancang bangunan luar biasa ini meskipun tak mengenal sistem komputer dan teknologi canggih lainnya. Pembangunan kompleks candi terbesar ini dapat diselesaikan sekitar 50-70 tahun kemudian. Nama Borobudur berasal dari bahasa Sansekerta ‘Vihara Buddha Uhr’ yang berarti Biara Buddha di Bukit. Pada masa itu, Candi Borobudur menjadi pusat kegiatan keagamaan terbesar. Sampai saat masuknya pengaruh Islam pada abad ke-15. Candi ini mulai ditinggalkan oleh masyarakat yang beralih ke agama Islam. Borobudur semakin terlupakan saat terjadi letusan Gunung Merapi yang membuatnya terkubur abu vulkanik. Pada tahun 1814, Sir Thomas Stamford Raffles mengungkap keberadaan Candi Borobudur setelah mendapat informasi mangenai adanya sebuah bangunan besar yang tertimbun abu vulkanik. Tak hanya tertimbun abu vulkanik, kondisi candi saat ditemukan juga dipenuhi semak belukar. Sejak ditemukan kembali, pemugaran dan berbagai usaha rekonstruksi candi dilakukan mulai dari masa penjajahan Inggris, Belanda sampai saat Indonesia telah merdeka. Dengan bantuan dari UNESCO dan para ahli sejarah budaya dari berbagai belahan dunia, Indonesia terus berupaya memperbaiki kondisi Candi Borobudur. Setelah lebih dari sepuluh abad terbaikan dan tak terpelihara, kompleks candi ini tetap berdiri kokoh sampai saat ini. Ada banyak sekali hal yang bisa Anda lakukan selama berada di kompleks candi Buddha paling besar di dunia ini, di antaranya: Jika Anda menyukai seni sastra dan budaya, berada di Candi Borobudur tentunya akan menjadi pengalaman yang menarik sekali. Anda bisa membaca dan mengamati panel relief yang tergambar di dinding candi. Untuk dapat membaca cerita relief ini secara berurutan, Anda harus berjalan mengitari candi searah putaran jarum jam yaitu dari kiri ke kanan. Mulailah dari pintu timur di tingkatan terbawah dan berjalanlah memutar sampai kembali ke pintu awal kemudian naik tangga ke tingkatan berikutnya. Lakukan hal ini terus-menerus sampai ke tingkatan teratas untuk mendapatkan cerita yang berurutan dan utuh. Anda mengalami kesulitan membaca cerita di relief? Tak perlu bingung karena ada jasa pemandu yang siap membantu Anda. Tempat wisata ini menawarkan banyak sekali objek foto yang menarik untuk Anda, penggemar fotografi. Cobalah berkeliling kompleks candi ini dan temukan angle yang pas untuk memotret. Candi Borobudur juga dikenal memiliki pemandangan matahari terbit dan terbenam yang cantik. Datanglah pada momen yang tepat, siapkan kamera Anda dan selamat mengabadikan pemandangan cantiknya. Di kompleks Candi Borobudur terdapat pelataran hijau luas yang bisa Anda jelajahi. Selain dengan berjalan kaki, Anda bisa menyewa sepeda untuk mengelilingi tempat wisata ini. Anda membawa anak kecil? Cobalah naik kereta kelinci yang pastinya disukai anak-anak. Jika ingin mencoba pengalaman yang berbeda, kenapa tak mencoba naik andong untuk berkeliling? Candi Borobudur menjadi salah satu tempat peribadatan berpengaruh bagi umat Buddha di dunia. Setiap tahunnya, kompleks candi ini menjadi pusat perayaan hari raya Waisak dan didatangi oleh umat Buddha dari berbagai negara seperti Thailand, Kamboja, Cina dan Tibet. Hari raya Waisak dirayakan pada saat bulan purnama di bulan Mei atau biasa disebut dengan Purnama Siddhi. Puncak dari perayaan Waisak ini mengundang banyak wisatawan baik domestik maupun mancanegara. Pada saat itu dilakukan pelepasan ratusan lampion ke langit beserta harapan terbaik untuk satu tahun ke depan."
      },
    {
        title: "NMAX Gagah 2016",
        date: "" + Date.now(),
        price: "USD 990",
        image: "assets/img/nmax3.jpg",
        description: "assets/img/nmax3.jpg"
      },
    {
        title: "Vario 125 LED 2015",
        date: "" + Date.now(),
        price: "USD 930",
        image: "assets/img/vario3.jpg",
        description: "assets/img/vario3.jpg"
      }
  ];

  // openModal() {
  //   let modal = this.modalCtrl.create(ModalPage);
  //   modal.present();
  // }
}
