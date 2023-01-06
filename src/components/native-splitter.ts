
interface SplitterOptions {
    htmlElement: HTMLElement;
    layout?: keyof typeof LAYOUT_DIRECTION;
    splitterSize?: number;
}

interface SplitterHandler {
    // createSplitterOnFirst
    // createSplitterOnSecond
    // on( "startResizing", "click", "resizing", "endResizing" )
}

const LAYOUT_DIRECTION = {
    vertical: "column",
    horizontal: "row"
};

const createSplitter = ( parentElement: HTMLElement ) => {
    const splitter = document.createElement("div");

    
};

export const createNativeSplitter = ( { 
    htmlElement, 
    layout = "horizontal",
    splitterSize = 8
}: SplitterOptions ): SplitterHandler => {

    htmlElement.style.display = "flex";
    htmlElement.style.flexDirection = LAYOUT_DIRECTION[layout] ?? LAYOUT_DIRECTION.horizontal;

    return {
        
    };

};
