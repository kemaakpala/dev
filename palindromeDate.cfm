<cfset createDate = createDate("2001", "10", "02") />
<cfdump var = "#createDate#" >
<cfset formatDate = dateFormat(createDate, "YYYY") >
<cfset newStrDate = ''>
<cfset count = 0>
<cfset ncount = 0>
<cfset structLastThree = StructNew("Ordered")>

<cffunction name="createPalindromeDate">
    <cfargument required="true" type="string" name="strDate" default="">
    <cfset newStrDate = "">
    <cfloop index="intChar" from="1" to="#Len( strDate )#" step="2">
    <!---
        Get the character at the given index. The ColdFusion
        Mid() function takes the string, the starting index
        and the number of characters to return. In this case,
        we only want one character, so the length is one.
    --->
        <cfset strChar = Mid( strDate, intChar, 2 ) >

    <!--- Output the character and the index. --->
         <cfif 5 gt intChar>
            <cfset newStrDate &= strChar & '/'>
        <cfelse>
            <cfset newStrDate &= strChar>
        </cfif>

    </cfloop>
    <cfreturn newStrDate>
</cffunction>

<cffunction name="checkDate">
    <cfargument required="true" type="string" name="newStrDate"> 
    <cfreturn isDate(newStrDate)>
</cffunction>

<cfdump var = "#formatDate#" label ="formatDate">

<cfloop index="cnt" from="#formatDate#" to="1000" step= "-1">
    <cfset structLastThree[cnt] = structNew()>
    
    <cfset reverseDate = Reverse(cnt) >
    <!---<cfdump var ="#reverseDate#" label="reversDate">--->
    
    <cfset strDate = reverseDate  & cnt>
    
    <cfif checkDate(createPalindromeDate(strDate))>
        <cfset count += 1>
        <cfset structLastThree[cnt]["palindrome"]= strDate>
        <cfset structLastThree[cnt]["date"] = createPalindromeDate(strDate)>
        <cfset structLastThree[cnt]["isActualDate"] = checkDate(createPalindromeDate(strDate))>
        <cfset structLastThree[cnt]["num"] = count >
        <cfset structLastThree[cnt]["dateFormat"] = "MMDDYYYY">
    </cfif>
    <!---<cfdump var="#count#">--->
    <cfif count eq 3>
        <cfbreak> 
    </cfif>
</cfloop>


<cfloop index="cnt" from="#formatDate#" to="2015" step= "1">
    <cfset structNextFive[cnt] = structNew()>
    <cfset reverseDate = Reverse(cnt)>
    
    <cfset nStrDate = reverseDate & cnt >
       <cfif checkDate(createPalindromeDate(nStrDate))>
        <cfset ncount += 1>
        <cfset structNextFive[cnt]["palindrome"]= nStrDate>
        <cfset structNextFive[cnt]["date"] = createPalindromeDate(nStrDate)>
        <cfset structNextFive[cnt]["isActualDate"] = checkDate(createPalindromeDate(nStrDate))>
        <cfset structNextFive[cnt]["num"] = count >
        <cfset structNextFive[cnt]["dateFormat"] = "DDMMYYYY">
        <cfset structNextFive[cnt]["parsedDateTime"] = 
        ParseDateTime(structNextFive[cnt]['date'])
        >
    </cfif>
    <cfif ncount eq 5>
        <cfbreak> 
    </cfif>
</cfloop>

<cfdump var ="#structLastThree#" label="structLastThree">
<cfdump var ="#structNextFive#" label="structNextFive">

<cfset structDiffLastThree = structNew()>
<cfloop collection="#structLastThree#" item="key">
    <cfif NOT StructIsEmpty(structLastThree[key])>
        
        <cfset prevKey= key - 1>
        <cfif StructKeyExists(structLastThree, prevKey) AND NOT StructIsEmpty(structLastThree[prevKey])>

        <cfdump var ="#dateDiff('d', 
        structLastThree[key]['parsedDateTime'], 
        structLastThree[prevKey]['parsedDateTime'])#" label="dateDifflastthree">
        
        <cfset structKey = key &'-'& prevKey>
        <cfset structDiffLastThree[structKey] = dateDiff('d', 
        structLastThree[key]['parsedDateTime'], 
        structLastThree[prevKey]['parsedDateTime'])>
        
        </cfif>
    </cfif>
</cfloop>

<cfdump var="#structDiffLastThree#" label="structDiffLastThree">
<cfset structDiffNextFive = structNew()>
<cfloop collection="#structNextFive#" item="key">
    <cfif not StructIsEmpty(structNextFive[key])>
        
        <cfset nextKey= key + 1>
        <cfif StructKeyExists(structNextFive, nextKey) AND NOT StructIsEmpty(structNextFive[nextKey])>

        <cfset structKey = key &'-'& nextKey>
        <cfset structDiffNextFive[structKey] = dateDiff('d', 
        structNextFive[key]['parsedDateTime'], 
        structNextFive[nextKey]['parsedDateTime'])>
        
        </cfif>
    </cfif>
</cfloop>
<cfdump var="#structDiffNextFive#" label="structDiffNextFive">