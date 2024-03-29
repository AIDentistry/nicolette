// screens: {
// xxs: "412px"
//   xs: "480px",
//   ss: "620px",
//   sm: "768px",
//   md: "1060px",
//   lg: "1200px",
//   xl: "1700px",
// },

const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  boxesContainer:
    "xl:w-full xl:h-[1000px] lg:w-full lg:h-[360px] md:w-full md:h-[300px] sm:w-full sm:h-[700px] ss:w-full ss:h-[900px] xs:w-full xs:h-[600px] xxs:w-full xxs:h-[500px] w-full h-[500px]",
  heading1:
    "font-poppins font-semibold lg:text-[42px] md:text-[32px] sm:text-[42px] ss:text-[32px] text-[28px] lg:leading-[52px] md:leading-[46px] sm:leading-[42px] ss:leading-[36px] leading-[32px]",
  paragraph:
    "font-poppins font-normal text-[#112E2B] text-[18px] leading-[24.8px]",
  image:
    "rounded-2xl max-md:mt-8 lg:w-[440px] lg:h-[420px] md:w-[450px] md:h-[450px] sm:w-[500px] sm:h-[500px] ss:h-[380px] ss:w-[380px] xs:w[360px] xs:h-[360px] xxs:w-[340px] xxs:h-[340px] w-[300px] h-[300px] ",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-2 py-0",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  hover: "bg-secondary",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY} justify-center max-md:items-center items-center`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-8 ml-0 md:mt-0 mt-4 relative`,

  sectionInfo: `flex-1 ${styles.flexCenter} flex-col`,
};

export default styles;
