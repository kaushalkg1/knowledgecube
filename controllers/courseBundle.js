import courseBundle from "../models/course/create/Bundle/courseBundle";






export const createCourse = async ({ title,description,author }) => {
  try {
    const courseBundleData = await courseBundle.create({
      title,description,author
    });

   
    return Promise.resolve({
      courseBundle: { id: courseBundleData._id, title: courseBundleData.title,description: courseBundleData.description,
        author:courseBundleData.author
        },
    });
  } catch (error) {
    return Promise.reject({ error });
  }   
};





 




