'use client'
import { useState, ChangeEvent } from 'react';

export default function Home() {
  const [fileName, setFileName] = useState('Wybierz plik');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('Wybierz plik');
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[83vh]">
      <div className="w-[40%] h-[60%] bg-blue-500 rounded-3xl flex flex-col items-center justify-start">
        <div className="h-1/2 flex justify-center items-end w-full">
          <div className="w-1/2 h-1/2 rounded-lg bg-[#efefef] flex flex-col items-center justify-center">
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            
            <label
              htmlFor="file-upload"
              className="text-black cursor-pointer w-full h-full flex items-center justify-center"
            >
              {fileName}
            </label>
          </div>
        </div>

        <div className="h-1/2 w-full flex justify-center items-center">
          <h1 className="text-white">Lub upuść go tutaj</h1>
        </div>
      </div>
    </div>
  );
}
