import React, {useState, FC, useCallback, useRef, useEffect} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Modal, {ModalProps} from '../Modal';
import Button from '../Button';
import styled from 'styled-components';

const BtnFileBox = styled.div`
  & > div{
    position: relative;
    display: inline-block;
    overflow: hidden;
    input[type="file"]{
      position: absolute;
      left: 0;
      top: -50px;
      height: 200px;
      cursor: pointer;
    }
  }
`;


const HeadClip:FC = () =>{
  const [upImg, setUpImg] = useState<any>();
  const imgRef = useRef<any>(null);
  const previewCanvasRef = useRef<any>(null);
  const [crop, setCrop] = useState<any>({unit: '%', width: 30, aspect: 1 / 1});
  const [completedCrop, setCompletedCrop] = useState<any>(null);

  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
    );
  }, [completedCrop]);

  const generateDownload = (canvas: any, crop: any) => {
    if (!crop || !canvas) {
      return;
    }
    canvas.toBlob(
        (blob: any) => {
          const previewUrl = window.URL.createObjectURL(blob);
          console.log(previewUrl);
          const imgUrlDom = document.getElementById('imgUrl');
          if (imgUrlDom !== null ) {
            imgUrlDom.textContent = previewUrl;
          }
          // const anchor = document.createElement('a');
          // anchor.download = 'cropPreview.png';
          // anchor.href = URL.createObjectURL(blob);
          // anchor.click();

          // window.URL.revokeObjectURL(previewUrl);
        },
        'image/png',
        1,
    );
  };

  return (
    <div className="App">
      <BtnFileBox>
        <div>
          <Button buttonType="primary" hollow >选择图片</Button>
          <input type="file" accept="image/*" onChange={onSelectFile} />
        </div>
      </BtnFileBox>
      <ReactCrop
        src={upImg}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
      />
      <div>
        <canvas
          ref={previewCanvasRef}
          // Rounding is important so the canvas width
          //  and height matches/is a multiple for sharpness.
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0),
          }}
        />
      </div>
      {(completedCrop?.width || completedCrop?.height) &&
        <Button
          type="button"
          onClick={() =>
            generateDownload(previewCanvasRef.current, completedCrop)
          }
        >
        下载图片
        </Button>
      }
      <div id="imgUrl"></div>
    </div>
  );
};


export default HeadClip;
