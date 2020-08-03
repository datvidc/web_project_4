/* ###############################################################
                Importing modules and utils
############################################################### */
import { enableValidationPicture, editProfilePic, profilePic, deleteButton, elementsContainer, initialCards, enableValidation, enableValidationAddCard, edit, modal, saveaddcard, popupTitle, popupName, btnAddCard, } from "./utils/const.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import "../pages/index.css";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { secretToken } from "../../secret.js";
import Api from "./components/Api.js";
/* ############################################################
STARTUP CODE
############################################################### */

const api = new Api('https://around.nomoreparties.co/v1/', {
  headers: {
    authorization: secretToken,
    "Content-Type": "application/json"

  }
});
//setuser info
const userInfo = new UserInfo(".profile__name", ".profile__title", ".profile__avatar");
api.getUser()
  .then(res => {

    userInfo.setUserInfo(res.name, res.about);
    userInfo.setUserID(res._id);
    userInfo.setuserImage(res.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

/* api._appReady()
  .then(([cardsReturned, userInfoData]) => {
    var startCards = new Section({
      items: cardsReturned,
      renderer: (item) => { // renderer accepts item passed from section class
        const handleCardClick = (itemName, itemLink) => {
          imgPopup.open(itemName, itemLink);
        };
        const newCard = new Card(item.name, item.link, '.element__elem', handleCardClick).addCard();
        startCards.addItem(newCard);
      }
    }, '.elements__list')
    startCards.renderItems();

    userInfo.setUserInfo(userInfoData.name, userInfoData.about);
    userInfo.setUserID(userInfoData.avatar, userInfoData._id);

  })
 */

const handleLikes = (like, id) => {
  if (like) {
    api.likeCard(id);
  } else {
    api.disLike(id);
  }
}


api.getInitialCards()
  .then((result) => {

    const cardsfromServer = result;
    var serverCards = new Section({
      items: cardsfromServer,
      renderer: (item) => { // renderer accepts item passed from section class
        const handleCardClick = (itemName, itemLink) => {
          imgPopup.open(itemName, itemLink);
        };
        if (userInfo.isUser(item.owner._id)) {
          const newCard = new Card(item.name, item.link, '.element__elem', handleCardClick, item._id, item.likes, 1, userInfo.userId, openDeleteConfirm, handleLikes).addCard();
          serverCards.addItem(newCard);
        } else {

          const newCard = new Card(item.name, item.link, '.element__elem', handleCardClick, item._id, item.likes, 0, userInfo.userId, openDeleteConfirm, handleLikes).addCard();
          serverCards.addItem(newCard);
        }

      }
    }, '.elements__list')
    serverCards.renderItems();
  })
  .catch((err) => {
    console.log(err); // log the error to the console

    /* If something fails in loading the start cards from server- backup is to load the ones on file*/
    const startCards = new Section({
      items: initialCards,
      renderer: (item) => { // renderer accepts item passed from section class
        const handleCardClick = (itemName, itemLink) => {
          imgPopup.open(itemName, itemLink);
        };
        const newCard = new Card(item.name, item.link, '.element__elem', handleCardClick).addCard();
        startCards.addItem(newCard);
      }
    }, '.elements__list')

    startCards.renderItems();
  });



// Image popup / click on image
const imgPopup = new PopupWithImage(".popup__img");
imgPopup.setEventListeners();




// profile popup

const handleProfileChange = (formData) => {
  const name = formData.ProfileName.value;
  const title = formData.profileTitle.value;

  api.updateUser(name, title)
    .then(() => {
      userInfo.setUserInfo(name, title);
    })
    .catch((err) => {
      console.log(err);
    })

}



const profilePopup = new PopupWithForm(".popup__changetext", handleProfileChange, "Saving ...");
profilePopup.setEventListeners();

const handleDeletion = () => {
  const id = deleteButton.dataset.id;
  api.deleteCard(id)
    .then(() => {
      const el = document.getElementById(id).parentElement;
      el.remove();
    })
    .catch((err) => {
      console.log(err);
    })
}

const handlePicChange = (formData) => {

  api.updateAvatar(formData[0].value)
    .then(() => {
      userInfo.setuserImage(formData[0].value);
    })
    .catch((err) => {
      console.log(err);
    })
}
''


const openDeleteConfirm = (id) => {
  deleteConfirm.open();
  deleteButton.dataset.id = id;
}

// addCard popup
const handleAddCard = (FormData) => {

  const imageTitle = FormData.placename.value;
  const imageLink = FormData.popupurl.value;
  api.addCard(imageTitle, imageLink)
    .then((result) => {

      /*  const handleCardClick = (itemName, itemLink) => {
         imgPopup.open(itemName, itemLink);
       }; */
      const newCard = new Card(result.name, result.link, '.element__elem', handleCardClick, result._id, result.likes, 1, userInfo.userId, openDeleteConfirm, handleLikes).addCard();
      elementsContainer.prepend(newCard);

    })
    .catch((err) => {
      console.log(err);
    });


}




/* ###################################################################################
                    PopupWithForm
################################################################################ */
const addCardPop = new PopupWithForm(".popup__addcard", handleAddCard, "Saving...");

const profilePicture = new PopupWithForm(".popup__edit-picture", handlePicChange, "Saving ...");

const deleteConfirm = new PopupWithForm(".popup__delete-confirm", handleDeletion, "Deleting ...");
/* ###################################################################################
                    Eventlisteners
################################################################################ */



profilePic.addEventListener("click", () => {
  profilePicture.resetForm();
  profilePicture.open();
})

edit.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  popupTitle.value = data.titel;
  popupName.value = data.name;
  profilePopup.open();
});

btnAddCard.addEventListener("click", () => {
  addCardPop.resetForm();
  addCardPop.open();
});



//validation setting object
new FormValidator(modal, enableValidation).enableValidation();
new FormValidator(editProfilePic, enableValidationPicture).enableValidation();
new FormValidator(saveaddcard, enableValidationAddCard).enableValidation();
