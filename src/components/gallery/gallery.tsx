import { Globals } from "../../globals";
import Division from "../division/division";
import GalleryItem from "./gallery-item";

const Gallery = () => {
  return (
    <>
      <Division title="Produtos" sub="Processos de qualidade"></Division>
      <section className="w-full px-4 flex justify-center items-center gap-4 flex-wrap mb-32">
        <GalleryItem
          img={Globals.img.img1}
          name="Estoque de cilindro pequeno duplo"
          description="
Carrinhos de mão projetados para transportar cilindros de gás com segurança e eficiência. Com estrutura reforçada, suportes para fixação e rodas resistentes, eles facilitam o transporte e garantem estabilidade, reduzindo o esforço e o risco de acidentes durante o manuseio de cilindros pesados."
        ></GalleryItem>
        <GalleryItem
          img={Globals.img.img2}
          name="Cilindro pequeno duplo"
          description="
Carrinhos de mão projetados para transportar cilindros de gás com segurança e eficiência. Com estrutura reforçada, suportes para fixação e rodas resistentes, eles facilitam o transporte e garantem estabilidade, reduzindo o esforço e o risco de acidentes durante o manuseio de cilindros pesados."
        ></GalleryItem>
        <GalleryItem
          img={Globals.img.img3}
          name="Protótipo do projeto"
          description="
Carrinhos de mão projetados para transportar cilindros de gás com segurança e eficiência. Com estrutura reforçada, suportes para fixação e rodas resistentes, eles facilitam o transporte e garantem estabilidade, reduzindo o esforço e o risco de acidentes durante o manuseio de cilindros pesados."
        ></GalleryItem>
        <GalleryItem
          img={Globals.img.img4}
          name="Cilindro pequeno duplo em uso"
          description="
Carrinhos de mão projetados para transportar cilindros de gás com segurança e eficiência. Com estrutura reforçada, suportes para fixação e rodas resistentes, eles facilitam o transporte e garantem estabilidade, reduzindo o esforço e o risco de acidentes durante o manuseio de cilindros pesados."
        ></GalleryItem>
        <GalleryItem
          img={Globals.img.img5}
          name="Cilindro maior duplo"
          description="
Carrinhos de mão projetados para transportar cilindros de gás com segurança e eficiência. Com estrutura reforçada, suportes para fixação e rodas resistentes, eles facilitam o transporte e garantem estabilidade, reduzindo o esforço e o risco de acidentes durante o manuseio de cilindros pesados."
        ></GalleryItem>
        <GalleryItem
          img={Globals.img.img6}
          name="Cilindro maior duplo em uso"
          description="
Carrinhos de mão projetados para transportar cilindros de gás com segurança e eficiência. Com estrutura reforçada, suportes para fixação e rodas resistentes, eles facilitam o transporte e garantem estabilidade, reduzindo o esforço e o risco de acidentes durante o manuseio de cilindros pesados."
        ></GalleryItem>
      </section>
    </>
  );
};

export default Gallery;
