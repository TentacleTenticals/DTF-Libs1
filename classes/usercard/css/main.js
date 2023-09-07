const usercardCss = () => `
.profileCard {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px;
  width: 400px;
  background-color: rgb(0,0,0);
  color: rgb(255,255,255);
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

.list {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 0 5px;
}

.off {
  opacity: 0.5;
}
`;
