const backend_url = `${import.meta.env.VITE_BASE_URL}/api/v1`;

export const apis = {
    getBanner: `${backend_url}/getBanners`,
    updateBanner: `${backend_url}/updateBanner`,
}