package fr.imie.web;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;



@RequestScoped
public class UrlToLanguage {
	
	@Inject HttpServletRequest httpServletRequest;
	
	public Language getLanguage(){
		return Language.us;
	}

}
