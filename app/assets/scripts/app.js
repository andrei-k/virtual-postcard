const app = Vue.createApp({
	data() {
		return {
			steps: {
				1: true,
				2: false,
				3: false,
				4: false,
				5: false
			},
			userMessage: "",
			defaultMessage: "",
			maxChars: 500,
			remainingChars: 500,
			userName: "",
			userEmail: "",
			userPostcardSrc: "./assets/images/postcard-1-back.png",
			userPostcardStyleObject: {
				backgroundImage: "url(./assets/images/postcard-1-back.png)"
			}
		}
	},
	methods: {
		nextStep(step) {
			this.steps[1] = false;
			this.steps[2] = false;
			this.steps[3] = false;
			this.steps[4] = false;
			this.steps[5] = false;

			// Generate the fade out/fade in effect during transitions
			let self = this;
			setTimeout(function() { 
				self.steps[step] = true;
			}, 320);
		},
		selectPostcard(postcard) {
			this.userPostcardSrc = "./assets/images/postcard-" + postcard + "-back.png";
			this.userPostcardStyleObject.backgroundImage = "url(" + this.userPostcardSrc + ")";
			this.nextStep(3);
		},
		previewPostcard() {
			this.preserveInput();
			this.nextStep(4);
		},
		changePostcard() {
			this.preserveInput();
			this.nextStep(2);
		},
		preserveInput() {
			this.userEmail = this.$refs.inputEmail.value;
			this.userName = this.$refs.inputName.value;
			this.userMessage = this.$refs.inputMessage.value;
		},
		mailPostcard() {
			// TODO: Save data
			this.nextStep(5);
		},
		checkChars() {
			this.preserveInput();
			this.remainingChars = this.maxChars - this.$refs.inputMessage.value.length;
		}
	},
	computed: {
		inputMessage() {
			return (this.userMessage != "") ? this.userMessage : this.defaultMessage;
		},
		finalMessage() {
			return this.userMessage.replace(/(?:\r\n|\r|\n)/g, "<br>");
		}
	}
});

app.mount("#app");