const Settings = () => {

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function() {
  console.log(image_input.value);
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").computedStyleMap.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
})
  return (
    <div className="bg page2">
      <h1>Settings</h1>
      <p1>Upload background image</p1>
      <input type="file" id="image_input" accept="image/png, image/jpg"></input>
      <div id="display_image"></div>
      <script src="background.js"></script>
    </div>
  );
};

export default Settings;
