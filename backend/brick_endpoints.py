
import os
import requests
from dotenv import load_dotenv

load_dotenv()

BASE_URL = "https://www.brickeconomy.com/api/v1"
API_KEY = os.getenv("BRICKECONOMY_API_KEY")

print(API_KEY)

HEADERS = {
    "Accept": "application/json",
    "User-Agent": "LEGOTracker/1.0",
    "x-apikey": API_KEY or "",
    "Content-Type": "application/json",
}

def _get(endpoint, params=None):
    """Send an authenticated GET request."""
    response = requests.get(
        f"{BASE_URL}/{endpoint.lstrip('/')}",
        headers=HEADERS,
        params=params,
        timeout=30,
    )
    response.raise_for_status()
    return response.json()


def _post(endpoint, payload):
    """Send an authenticated POST request with a JSON body."""
    response = requests.post(
        f"{BASE_URL}/{endpoint.lstrip('/')}",
        headers=HEADERS,
        json=payload,
        timeout=30,
    )
    response.raise_for_status()
    return response.json()


# ==========================================
# USAGE
# ==========================================

def get_usage():
    """Get API quota, requests used, remaining requests, and reset time."""
    return _get("usage")


# ==========================================
# SETS
# ==========================================

def get_set(set_number, currency="USD"):
    """Get full details and estimated values for a LEGO set."""
    return _get(f"set/{set_number}", {"currency": currency})


def search_sets(query, limit=100):
    """Search sets by name, number, theme, or subtheme."""
    return _get("search/sets", {"query": query, "limit": limit})


def search_sets_by_barcode(barcode, limit=100):
    """Search LEGO sets by UPC or EAN barcode."""
    return _get("search/sets", {"barcode": barcode, "limit": limit})


# ==========================================
# MINIFIGURES
# ==========================================

def get_minifig(minifig_number, currency="USD"):
    """Get details and estimated value for a minifigure."""
    return _get(
        f"minifig/{minifig_number}",
        {"currency": currency},
    )


def search_minifigs(query, limit=100):
    """Search minifigures by name or minifig number."""
    return _get(
        "search/minifigs",
        {"query": query, "limit": limit},
    )


# ==========================================
# YOUR COLLECTION
# ==========================================

def get_my_sets(currency="USD"):
    """Get your entire LEGO set collection and value history."""
    return _get("collection/sets", {"currency": currency})


def get_my_minifigs(currency="USD"):
    """Get your entire minifigure collection and value history."""
    return _get("collection/minifigs", {"currency": currency})


def get_collection_summary(currency="USD", scope=None):
    """
    Get collection totals, gains, historical changes,
    forecasts, and top-performing items.

    scope: None, 'sets', or 'minifigs'
    """
    params = {"currency": currency}

    if scope:
        params["scope"] = scope

    return _get("collection/summary", params)


# ==========================================
# MODIFY YOUR SET COLLECTION
# ==========================================

def add_set(set_number, quantity=1, **details):
    """
    Add copies of a set.

    Optional details:
    paid_price, currency, condition, acquired_date,
    notes, collection
    """
    payload = {
        "set_number": set_number,
        "quantity": quantity,
        **details,
    }
    return _post("collection/sets/add", payload)


def update_set(set_number, item_id=None, blank_copy=None, **details):
    """
    Update one copy of a set.

    Optional selectors: item_id or blank_copy=True.
    Optional details: paid_price, currency, condition,
    acquired_date, notes, collection.
    """
    payload = {"set_number": set_number, **details}

    if item_id is not None:
        payload["item_id"] = item_id

    if blank_copy is not None:
        payload["blank_copy"] = blank_copy

    return _post("collection/sets/update", payload)


def remove_set(set_number, item_id=None, quantity=None, all=False):
    """
    Remove a set copy, copies without details, or all copies.

    Supply exactly one of item_id, quantity, or all=True.
    """
    payload = {"set_number": set_number}

    if item_id is not None:
        payload["item_id"] = item_id
    elif quantity is not None:
        payload["quantity"] = quantity
    elif all:
        payload["all"] = True
    else:
        raise ValueError("Supply item_id, quantity, or all=True")

    return _post("collection/sets/remove", payload)


# ==========================================
# MODIFY YOUR MINIFIGURE COLLECTION
# ==========================================

def add_minifig(minifig_number, quantity=1, **details):
    """Add minifigures. Accepts the same detail fields as add_set."""
    payload = {
        "minifig_number": minifig_number,
        "quantity": quantity,
        **details,
    }
    return _post("collection/minifigs/add", payload)


def update_minifig(minifig_number, item_id=None, blank_copy=None, **details):
    """Update one minifigure copy and its optional detail fields."""
    payload = {"minifig_number": minifig_number, **details}

    if item_id is not None:
        payload["item_id"] = item_id

    if blank_copy is not None:
        payload["blank_copy"] = blank_copy

    return _post("collection/minifigs/update", payload)


def remove_minifig(minifig_number, item_id=None, quantity=None, all=False):
    """Remove one minifigure copy, copies without details, or all copies."""
    payload = {"minifig_number": minifig_number}

    if item_id is not None:
        payload["item_id"] = item_id
    elif quantity is not None:
        payload["quantity"] = quantity
    elif all:
        payload["all"] = True
    else:
        raise ValueError("Supply item_id, quantity, or all=True")

    return _post("collection/minifigs/remove", payload)


# ==========================================
# WANTED LISTS
# ==========================================

def get_wanted_sets(currency="USD"):
    """Get your wanted LEGO sets."""
    return _get("wanted/sets", {"currency": currency})


def get_wanted_minifigs(currency="USD"):
    """Get your wanted minifigures."""
    return _get("wanted/minifigs", {"currency": currency})


def add_wanted_set(set_number):
    """Add a set to your wanted list."""
    return _post("wanted/sets/add", {"set_number": set_number})


def remove_wanted_set(set_number):
    """Remove a set from your wanted list."""
    return _post("wanted/sets/remove", {"set_number": set_number})


def add_wanted_minifig(minifig_number):
    """Add a minifigure to your wanted list."""
    return _post(
        "wanted/minifigs/add",
        {"minifig_number": minifig_number},
    )


def remove_wanted_minifig(minifig_number):
    """Remove a minifigure from your wanted list."""
    return _post(
        "wanted/minifigs/remove",
        {"minifig_number": minifig_number},
    )


# ==========================================
# SALES LEDGER
# ==========================================

def get_sales_ledger():
    """Get your sales ledger for LEGO sets and minifigures."""
    return _get("salesledger")
