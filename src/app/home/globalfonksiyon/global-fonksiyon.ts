
export function getPageResize(width: number,screen:number) {

    let panelWidthStr:string ='';
    const dynamicCss={
        width: "",
    }
    if(screen>=600){
        width = width-120;
      }
      if(screen%120==0){
        width = width-120;
      }
      panelWidthStr = width + "px";
      dynamicCss.width = panelWidthStr;

    return dynamicCss;
  }