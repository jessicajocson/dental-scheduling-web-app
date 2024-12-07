import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
    services: [
        {
            id: 1,
            name: "General Dentistry",
            value: "generaldentistry",
            description:
                "Comprehensive oral health check-ups, cleanings, and more.",
            //   image_src: "whitening.png",
        },
        {
            id: 2,
            name: "Cosmetic Dentistry",
            value: "cosmeticdentistry",
            description:
                "Teeth whitening, veneers, and enhancing your smile.",
            //   image_src: "checkup.png",
        },
        {
            id: 3,
            name: "Orthodontics",
            value: "orthodontics",
            description:
                "Braces, Invisalign, and correcting misaligned teeth.",
            //   image_src: "ortho.png",
        },
    ],
};

const ServicesSlice = createSlice({
    name: "SERVICES",
    initialState,
    reducers: {
        addServices: (state, action: PayloadAction<any[]>) => {
            state.services = action.payload;
        },
    },
});

export const Services = ServicesSlice.reducer;
export const { addServices } = ServicesSlice.actions;