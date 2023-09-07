const profilecardCss = () => `
.profileCard {
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 8px;
  width: 400px;
  background-color: rgb(0,0,0);
  color: rgb(255,255,255);
  z-index: 10;
}
.profileCard>* {
  z-index: 1;
}
.profileCard>.header {
  text-align: center;
}

.profileCard .mask.avatar {
  width: 150px;
  aspect-ratio: 1/1;
  border-radius: 2px;
  box-shadow: 0 0 3px 0 rgb(255,255,255);
}
.profileCard .mask.cover {
  position: absolute;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  padding: 0;
  margin: auto;
  opacity: 0.5;
}

.profileCard .list {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 0 5px;
}

.profileCard .off {
  opacity: 0.5;
}
`;
