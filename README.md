# Basic Nodejs based Profile 

This is a basic profile page for **KS Mane** using *NodeJs* and *Docker*

Steps to Run this code Using **Docker**:
```
git clone https://github.com/ksmane15/profile-node.git
docker image build -t {your_image_name} .
docker container run -d -p 5000:5000 --name {name_of_your_container} {your_image_name}
run http://localhost:5000
```
Steps to Run this code without ~~Docker~~:
```
git clone https://github.com/ksmane15/profile-node.git
npm install
npm start
```