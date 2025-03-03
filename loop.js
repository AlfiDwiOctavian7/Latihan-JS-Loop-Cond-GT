// Array mahasiswa
const mahasiswa = [
    {
        name: "John",
        GPA: 3.2,
        postgraduate: true,
        mastery: ["ReactJs", "AngularJs", "VueJs"],
    },
    {
        name: "Bob",
        GPA: 3.8,
        postgraduate: false,
        mastery: ["Laravel 9", "Codeigniter 3", "PHP Native"],
    },
    {
        name: "Ryan",
        GPA: 2.4,
        postgraduate: false,
        mastery: ["Golang", "NodeJs", "Spring"],
    },
    {
        name: "Tim",
        GPA: 2.8,
        postgraduate: true,
        mastery: ["Ionic", "Flutter"],
    },
    {
        name: "Harry",
        GPA: 4.0,
        postgraduate: false,
        mastery: ["Codeigniter 3", "ReactJs", "C#"],
    },
    {
        name: "Ryan",
        GPA: 2.4,
        postgraduate: false,
        mastery: ["Codeigniter 3", "Flutter", "Laravel 9"],
    },
    {
        name: "Eric",
        GPA: 1.5,
        postgraduate: false,
        mastery: ["Codeigniter 3"],
    },
    {
        name: "Bryan",
        GPA: 3.5,
        postgraduate: true,
        mastery: ["Golang", "C#", "NodeJs"],
    },
    {
        name: "Agus",
        GPA: 3.5,
        postgraduate: false,
        mastery: ["AngularJs", "Laravel 9", "Laravel 8"],
    },
    {
        name: "Sean",
        GPA: 1.0,
        postgraduate: false,
        mastery: [],
    },
];

// Disediakan 2 Array dibawah ini
const bachelorDegree = [
];
const postGraduate = [
];


// TODO
// Pindahkan data dari Array Mahasiswa kedalam 2 Array diatas dengan ketentuan sebagai berikut:
//
// 1. Array bachelorDegree akan berbentuk sebuah Array of Objects yang memiliki 2 key
//    yaitu name & GPA. Nilai kedua key tersebut berasal dari Array Mahasiswa.
//
// 2. Array postGraduate akan berbentuk sebuah Array of Objects yang memiliki 2 key
//    yaitu name & mastery. Nilai kedua key tersebut berasal dari Array Mahasiswa.
//
// Isi dari Array bachelorDegree adalah mahasiswa yang memiliki status postgraduate : false
// Isi dari Array postGraduate adalah mahasiswa yang memiliki status postgraduate : true

// Lakukan pemindahan data dengan menggunakan loop dan conditional!

// Setelah data dipindah ke dalam 2 Array tersebut, lakukan output sesuai
// dengan file output.png

for (let siswa = 0; siswa < mahasiswa.length; siswa++) {
    if (mahasiswa[siswa].postgraduate) {
        postGraduate.push(
            {
                name: mahasiswa[siswa].name,
                mastery: mahasiswa[siswa].mastery
            }

        )
    } else {
        bachelorDegree.push(
            {
                name: mahasiswa[siswa].name,
                GPA: mahasiswa[siswa].GPA
            }
        )
    }
}

console.log("Mahasiswa S2");
for (let al = 0; al < postGraduate.length; al++) {
    console.log("Nama: " + postGraduate[al].name + "\nKeahlian: " + postGraduate[al].mastery);

}

console.log("Mahasiswa S1");
for (let index = 0; index < bachelorDegree.length; index++) {
    console.log("Nama: " + bachelorDegree[index].name + "\nIPK: " + bachelorDegree[index].GPA);

}
