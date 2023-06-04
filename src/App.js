import { useState } from "react";
import { format } from "./penilaian";
function App() {
  const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const aspect = [1, 2, 3, 4];
  const [nilai,setNilai] = useState(format)

  const formPenilaian = (i) => {
    return aspect.map((el) => (
      <div className="col-lg-2 pl-0" key={'aspek_' + el}>
        <select name="nilai" className="w-100" key={'select_' + el} onChange={e => changeNilai(el, i, e.target.value)}>
          {angka.map((val) => (
            <option key={'form_mahasiswa_' + val} value={val}>{val}</option>
          ))}
        </select>
      </div>
    ));
  };

  const changeNilai = (aspect, index, val) => {
    console.log('keganti')
    let x = nilai
    x['aspek_penilaian_' + aspect]['mahasiswa_' + index] = val
    setNilai(x)
  }

  const simpan = () => {
    console.log(nilai)
  }

  return (
    <div className="container">
      <div className="col-lg-12 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4"></div>
            {aspect.map((val) => (
              <div className="col-lg-2 pl-0" key={'aspek_penilaian_' + val}>Aspek Penilaian {val}</div>
            ))}
          </div>
          {angka.map((i) => (
            <div className="row justify-content-center my-2 p-2 border rounded" key={'div_mahasiswa_' + i}>
              <div className="col-lg-4" key={'mahasiswa_' + i}>Mahasiswa {i}</div>
              {formPenilaian(i)}
            </div>
          ))}
          <div className="row justify-content-end my-4">
            <div className="col-lg-2">
              <button className="btn btn-primary w-100" onClick={simpan}>Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
