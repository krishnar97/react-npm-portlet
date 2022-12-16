# react-npm-portlet
Case 1:
1. I have used react:component tablib in jsp 
<react:component
	module="lib/Test"					
	servletContext="<%= application %>"
/>
2. I have manually added react dependency in package.json file and deployed
3. It works fine

![Screenshot from 2022-12-16 18-10-36](https://user-images.githubusercontent.com/55977647/208100613-d4e31c42-858a-4d88-9345-b03ffe40287d.png)

Case 2:

1. I have used react:component tablib in jsp 
<react:component
	module="lib/Test"					
	servletContext="<%= application %>"
/>
2. I have manually added react dependency in package.json file and deployed
3. I have used useState() hook in my component and deployed
4. It throws Invalid Hook call exception

![Screenshot from 2022-12-16 17-55-36](https://user-images.githubusercontent.com/55977647/208100518-d09cb1ab-1c2d-454c-be26-0cfd9ded1412.png)


Case 3:

1. I have used react:component tablib in jsp 
<react:component
	module="lib/Test"					
	servletContext="<%= application %>"
/>
2. I am importing react in .npmbundlerrc and deployed
![Screenshot from 2022-12-16 18-13-43](https://user-images.githubusercontent.com/55977647/208100899-a16d05f8-1120-4d41-9127-7307b68905cd.png)

3. It throws Missing version constraints 

![Screenshot from 2022-12-16 17-57-04](https://user-images.githubusercontent.com/55977647/208101046-62008d65-aca1-469a-8953-6884cc467a22.png)


